import PropTypes from 'prop-types'
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

class Microblading extends React.Component {
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
              frontmatter: { templateKey: { eq: "microblading-page" } }
            ) {
              html
              frontmatter {
                title
              }
            }
          }
        `}
        render={data => (
          <article
            id="microblading"
            className={`${
              this.props.article === 'microblading' ? 'active' : ''
            } ${this.props.articleTimeout ? 'timeout' : ''}`}
            style={{ display: 'none' }}
          >
            <h2 className="major">{data.markdownRemark.frontmatter.title}</h2>
            {/* <span className="image main">
            <img src={pic03} alt="" />
          </span> */}
            <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
            {close}
          </article>
        )}
      />
    )
  }
}

Microblading.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Microblading
