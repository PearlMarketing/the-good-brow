import PropTypes from 'prop-types'
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import remark from 'remark';
import recommended from 'remark-preset-lint-recommended';
import remarkHtml from 'remark-html';

import Collapse from '../../Collapse'

class Services extends React.Component {
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
              frontmatter: { templateKey: { eq: "services-page" } }
            ) {
              html
              frontmatter {
                title
                service {
                  title
                  price
                  description
                }
              }
            }
          }
        `}
        render={data => (
          <article
            id="services"
            className={`${this.props.article === 'services' ? 'active' : ''} ${
              this.props.articleTimeout ? 'timeout' : ''
            }`}
            style={{ display: 'none' }}
          >
            <h2 className="major">{data.markdownRemark.frontmatter.title}</h2>
            {/* <span className="image main">
          <img src={pic02} alt="" />
        </span> */}
        {data.markdownRemark.frontmatter.service.map(({ title, price, description }) => {
          {description && (
            description = remark()
                .use(recommended)
                .use(remarkHtml)
                .processSync(description).toString())
          }
          return(
            <Collapse title={title} price={price}>
              {description && <div dangerouslySetInnerHTML={{ __html: description }} />}
            </Collapse>
          )})}
            <p>
              *Your safety is important to me! I am NH Blood-borne Pathogen
              Certified &amp; I use all disposable tools and cruelty free,
              organic pigments.*
            </p>
            {close}
          </article>
        )}
      />
    )
  }
}

Services.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Services
