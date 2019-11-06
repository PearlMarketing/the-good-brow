import PropTypes from 'prop-types'
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import remark from 'remark';
import recommended from 'remark-preset-lint-recommended';
import remarkHtml from 'remark-html';

import Collapse from '../../Collapse'

class FAQ extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <StaticQuery
        query={graphql`
          query {
            markdownRemark(
              frontmatter: { templateKey: { eq: "faq-page" } }
            ) {
              html
              frontmatter {
                title
                questions {
                  answer
                  question
                }
              }
            }
          }
        `}
        render={data => (
      <article
        id="faq"
        className={`${this.props.article === 'faq' ? 'active' : ''} ${
          this.props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">{data.markdownRemark.frontmatter.title}</h2>
        {/* <span className="image main">
          <img src={pic02} alt="" />
        </span> */}
        {data.markdownRemark.frontmatter.questions.map(({ question, answer }) => {
          answer = remark()
              .use(recommended)
              .use(remarkHtml)
              .processSync(answer).toString()
        return(
          <Collapse title={question}>
            <div dangerouslySetInnerHTML={{ __html: answer }} />
          </Collapse>
        )})}
        {close}
      </article>
      )}
      />
    )
  }
}

FAQ.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default FAQ
