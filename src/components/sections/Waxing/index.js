import PropTypes from 'prop-types'
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

class Waxing extends React.Component {
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
              frontmatter: { templateKey: { eq: "waxing-page" } }
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
            id="waxing"
            className={`${this.props.article === 'waxing' ? 'active' : ''} ${
              this.props.articleTimeout ? 'timeout' : ''
            }`}
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

Waxing.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Waxing
