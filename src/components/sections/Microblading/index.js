import PropTypes from 'prop-types'
import React from 'react'

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
      <article
          id="microblading"
          className={`${
            this.props.article === 'microblading' ? 'active' : ''
          } ${this.props.articleTimeout ? 'timeout' : ''}`}
          style={{ display: 'none' }}
        >
          <h2 className="major">What is Microblading</h2>
          {/* <span className="image main">
            <img src={pic03} alt="" />
          </span> */}
          <p>
            Microblading is the manual process of implanting pigment beneath the
            surface of the skin by means of tiny, sterile, disposable needles to
            give the appearance of natural hairstrokes to enhance your brows. If
            you are interested in effortless brows and boosting your confidence,
            this is exactly what youve been searching for!
          </p>
          {close}
        </article>
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
