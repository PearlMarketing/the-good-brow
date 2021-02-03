import React from 'react'
// import { StaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'

import Header from '../components/Header'

import About from '../components/sections/About'
import Services from '../components/sections/Services'
import Waxing from '../components/sections/Waxing'
import Microblading from '../components/sections/Microblading'
import Policies from '../components/sections/Policies'
import FAQ from '../components/sections/FAQ'
import Contact from '../components/sections/Contact'
import InstaFeed from '../components/instagram/Container'
import Instagram from "../components/instagram"

import Footer from '../components/Footer'
import Background from '../components/Background'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isArticleVisible: false,
      timeout: false,
      articleTimeout: false,
      article: '',
      loading: 'is-loading',
    }
    this.handleOpenArticle = this.handleOpenArticle.bind(this)
    this.handleCloseArticle = this.handleCloseArticle.bind(this)
    this.setWrapperRef = this.setWrapperRef.bind(this)
    this.handleClickOutside = this.handleClickOutside.bind(this)
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' })
    }, 100)
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
    document.removeEventListener('mousedown', this.handleClickOutside)
  }

  setWrapperRef(node) {
    this.wrapperRef = node
  }

  handleOpenArticle(article) {
    this.setState({
      isArticleVisible: !this.state.isArticleVisible,
      article,
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout,
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        articleTimeout: !this.state.articleTimeout,
      })
    }, 350)
  }

  handleCloseArticle() {
    this.setState({
      articleTimeout: !this.state.articleTimeout,
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout,
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        isArticleVisible: !this.state.isArticleVisible,
        article: '',
      })
    }, 350)
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      if (this.state.isArticleVisible) {
        this.handleCloseArticle()
      }
    }
  }

  render() {
    return (
      // <StaticQuery
      //   query={graphql`
      //     query MainPageQuery {
      //       allInstaNode(limit: 50, sort: { fields: timestamp, order: DESC }) {
      //         edges {
      //           node {
      //             id
      //             username
      //             likes
      //             caption
      //             comments
      //             localFile {
      //               childImageSharp {
      //                 fluid(quality: 70, maxWidth: 600, maxHeight: 600) {
      //                   ...GatsbyImageSharpFluid_withWebp
      //                 }
      //               }
      //             }
      //           }
      //         }
      //       }
      //     }
      //   `}
      //   render={data => (
          <Layout location={this.props.location}>
            <div
              className={`body ${this.state.loading} ${
                this.state.isArticleVisible ? 'is-article-visible' : ''
              }`}
            >
              <div id="wrapper">
                <Header
                  onOpenArticle={this.handleOpenArticle}
                  timeout={this.state.timeout}
                />
                <div
                  ref={this.setWrapperRef}
                  id="main"
                  style={
                    this.state.timeout
                      ? { display: 'flex' }
                      : { display: 'none' }
                  }
                >
                  <About
                    isArticleVisible={this.state.isArticleVisible}
                    timeout={this.state.timeout}
                    articleTimeout={this.state.articleTimeout}
                    article={this.state.article}
                    onCloseArticle={this.handleCloseArticle}
                    setWrapperRef={this.setWrapperRef}
                  />
                  <Services
                    isArticleVisible={this.state.isArticleVisible}
                    timeout={this.state.timeout}
                    articleTimeout={this.state.articleTimeout}
                    article={this.state.article}
                    onCloseArticle={this.handleCloseArticle}
                    setWrapperRef={this.setWrapperRef}
                  />
                  <Waxing
                    isArticleVisible={this.state.isArticleVisible}
                    timeout={this.state.timeout}
                    articleTimeout={this.state.articleTimeout}
                    article={this.state.article}
                    onCloseArticle={this.handleCloseArticle}
                    setWrapperRef={this.setWrapperRef}
                  />
                  <Microblading
                    isArticleVisible={this.state.isArticleVisible}
                    timeout={this.state.timeout}
                    articleTimeout={this.state.articleTimeout}
                    article={this.state.article}
                    onCloseArticle={this.handleCloseArticle}
                    setWrapperRef={this.setWrapperRef}
                  />
                  <Policies
                    isArticleVisible={this.state.isArticleVisible}
                    timeout={this.state.timeout}
                    articleTimeout={this.state.articleTimeout}
                    article={this.state.article}
                    onCloseArticle={this.handleCloseArticle}
                    setWrapperRef={this.setWrapperRef}
                  />
                  <FAQ
                    isArticleVisible={this.state.isArticleVisible}
                    timeout={this.state.timeout}
                    articleTimeout={this.state.articleTimeout}
                    article={this.state.article}
                    onCloseArticle={this.handleCloseArticle}
                    setWrapperRef={this.setWrapperRef}
                  />
                  <Contact
                    isArticleVisible={this.state.isArticleVisible}
                    timeout={this.state.timeout}
                    articleTimeout={this.state.articleTimeout}
                    article={this.state.article}
                    onCloseArticle={this.handleCloseArticle}
                    setWrapperRef={this.setWrapperRef}
                  />
                </div>
                <InstaFeed
                  // timeout={this.state.timeout}
                  title="Instagram Feed"
                  text="This is the Instagram Feed for The Good Brow NH"
                  // nodes={data.allInstaNode}
                />
                <Instagram />
                <Footer timeout={this.state.timeout} />
              </div>
              <Background />
            </div>
          </Layout>
    //     )}
    //   />
    )
  }
}

export default IndexPage
