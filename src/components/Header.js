import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import { StaticQuery, graphql } from 'gatsby'

const Header = (props) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          markdownRemark(frontmatter: { templateKey: { eq: "settings" } }) {
            html
            frontmatter {
              title
              button
              buttonURL
            }
          }
        }
      `}
      render={data => (
        <header id="header" style={props.timeout ? {display: 'none'} : {}}>
          {/* <div className="logo">
              <img src="" />
          </div> */}
          <div className="content">
              <div className="inner">
                  <h1>{data.markdownRemark.frontmatter.title}</h1>
                  <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
                  <Button href={data.markdownRemark.frontmatter.buttonURL} target="_blank">{data.markdownRemark.frontmatter.button}</Button>
              </div>
          </div>
          <nav>
              <ul>
                  <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                  <li><a href="javascript:;" onClick={() => {props.onOpenArticle('services')}}>Services</a></li>
                  <li><a href="javascript:;" onClick={() => {props.onOpenArticle('waxing')}}>Waxing</a></li>
                  <li><a href="javascript:;" onClick={() => {props.onOpenArticle('microblading')}}>What is Microblading?</a></li>
                  <li><a href="javascript:;" onClick={() => {props.onOpenArticle('policies')}}>Policies</a></li>
                  <li><a href="javascript:;" onClick={() => {props.onOpenArticle('faq')}}>FAQ</a></li>
                  <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
              </ul>
          </nav>
        </header>
      )}
    />
  )
}

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
