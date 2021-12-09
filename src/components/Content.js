import PropTypes from 'prop-types'
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import remark from 'remark'
import recommended from 'remark-preset-lint-recommended'
import remarkHtml from 'remark-html'

import Collapse from './Collapse'

const Content = ({
  isArticleVisible,
  timeout,
  articleTimeout,
  article,
  onCloseArticle,
  setWrapperRef,
  data,
}) => {
  let close = (
    <div
      className="close"
      onClick={() => {
        onCloseArticle()
      }}
    ></div>
  )

  return (
    <article
      id={data.frontmatter.slug}
      className={`${article === data.frontmatter.slug ? 'active' : ''} ${
        articleTimeout ? 'timeout' : ''
      }`}
      style={{ display: 'none' }}
    >
      <h2 className="major">{data.frontmatter.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: data.html }} />
      {data.frontmatter.list?.map(
        ({ title, price, description }) => {
          {
            description &&
              (description = remark()
                .use(recommended)
                .use(remarkHtml)
                .processSync(description)
                .toString())
          }
          return (
            <Collapse title={title} price={price}>
              {description && (
                <div dangerouslySetInnerHTML={{ __html: description }} />
              )}
            </Collapse>
          )
        }
      )}
      <p>
        *Your safety is important to me! I am NH Blood-borne Pathogen Certified
        &amp; I use all disposable tools and cruelty free, organic pigments.*
      </p>
      {close}
    </article>
  )
}

Content.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Content
