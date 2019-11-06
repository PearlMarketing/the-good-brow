import PropTypes from 'prop-types'
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

// import pic01 from '../images/pic01.jpg'

class About extends React.Component {
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
            markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
              html
              frontmatter {
                title
              }
            }
          }
        `}
        render={data => (
          <article
            id="about"
            className={`${this.props.article === 'about' ? 'active' : ''} ${
              this.props.articleTimeout ? 'timeout' : ''
            }`}
            style={{ display: 'none' }}
          >
            <h2 className="major">{ data.markdownRemark.frontmatter.title }</h2>
            <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
            {close}
          </article>
        )}
      />
    )
  }
}

About.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default About