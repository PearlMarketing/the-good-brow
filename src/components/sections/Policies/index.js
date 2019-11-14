import PropTypes from 'prop-types'
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

class Policies extends React.Component {
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
              frontmatter: { templateKey: { eq: "policies-page" } }
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
            id="policies"
            className={`${this.props.article === 'policies' ? 'active' : ''} ${
              this.props.articleTimeout ? 'timeout' : ''
            }`}
            style={{ display: 'none' }}
          >
            <h2 className="major">{data.markdownRemark.frontmatter.title}</h2>
            {/* <span className="image main">
            <img src={pic03} alt="" />
          </span> */}
            <div
              dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
            />
            {close}
          </article>
        )}
      />
    )
  }
}

Policies.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Policies
