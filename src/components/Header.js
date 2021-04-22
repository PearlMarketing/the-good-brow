import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import { StaticQuery, graphql } from 'gatsby'

const Header = props => {
  return (
    <StaticQuery
      query={graphql`
        query {
          settings: markdownRemark(
            frontmatter: { templateKey: { eq: "settings" } }
          ) {
            html
            frontmatter {
              title
              button
              buttonURL
            }
          }
          about: markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
            frontmatter {
              menuLink
            }
          }
          services: markdownRemark(frontmatter: { templateKey: { eq: "services-page" } }) {
            frontmatter {
              menuLink
            }
          }
          waxing: markdownRemark(frontmatter: { templateKey: { eq: "waxing-page" } }) {
            frontmatter {
              menuLink
            }
          }
          microblading: markdownRemark(frontmatter: { templateKey: { eq: "microblading-page" } }) {
            frontmatter {
              menuLink
            }
          }
          policies: markdownRemark(frontmatter: { templateKey: { eq: "policies-page" } }) {
            frontmatter {
              menuLink
            }
          }
          faq: markdownRemark(frontmatter: { templateKey: { eq: "faq-page" } }) {
            frontmatter {
              menuLink
            }
          }
          contact: markdownRemark(frontmatter: { templateKey: { eq: "contact-page" } }) {
            frontmatter {
              menuLink
            }
          }
        }
      `}
      render={data => (
        <header id="header" style={props.timeout ? { display: 'none' } : {}}>
          {/* <div className="logo">
              <img src="" />
          </div> */}
          <div className="content">
            <div className="inner">
              <h1>{data.settings.frontmatter.title}</h1>
              <div dangerouslySetInnerHTML={{ __html: data.settings.html }} />
              <Button
                href={data.settings.frontmatter.buttonURL}
                target="_blank"
              >
                {data.settings.frontmatter.button}
              </Button>
            </div>
          </div>
          <nav>
            <ul>
              <li>
                <a
                  href="javascript:;"
                  onClick={() => {
                    props.onOpenArticle('about')
                  }}
                >
                  {data.about.frontmatter.menuLink}
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  onClick={() => {
                    props.onOpenArticle('services')
                  }}
                >
                  {data.services.frontmatter.menuLink}
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  onClick={() => {
                    props.onOpenArticle('waxing')
                  }}
                >
                  {data.waxing.frontmatter.menuLink}
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  onClick={() => {
                    props.onOpenArticle('microblading')
                  }}
                >
                  {data.microblading.frontmatter.menuLink}
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  onClick={() => {
                    props.onOpenArticle('policies')
                  }}
                >
                  {data.policies.frontmatter.menuLink}
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  onClick={() => {
                    props.onOpenArticle('faq')
                  }}
                >
                  {data.faq.frontmatter.menuLink}
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  onClick={() => {
                    props.onOpenArticle('contact')
                  }}
                >
                  {data.contact.frontmatter.menuLink}
                </a>
              </li>
            </ul>
          </nav>
        </header>
      )}
    />
  )
}

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
