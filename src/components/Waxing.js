import PropTypes from 'prop-types'
import React from 'react'

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
      <article
        id="waxing"
        className={`${this.props.article === 'waxing' ? 'active' : ''} ${
          this.props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">Waxing (Appointment Only)</h2>
        {/* <span className="image main">
            <img src={pic03} alt="" />
          </span> */}
        <p>
          Waxing is the most common form of hair removal for fast, flawless
          resuts.
          <br />
          Hair must be at least 1/4 of an inch long in order to have the best
          waxing experience.
          <br />
          Be sure to gently exfoliate 2-3 days before yur waxing appointment.
          <br />
          Please stop use of any Accutane or Retin-A at least 72 hours before a
          wax.
          <br />
          Clients must be at least 18 years of age with a Valid ID
          <br />
          <br />
          <br />
          Women's Full Body Waxing
          <br />
          Brazilian $50
          <br />
          Bikini $25
          <br />
          French-Bikini $30
          <br />
          Full Legs &amp; Brazilian $95
          <br />
          Full Legs &amp; Bikini $85
          <br />
          1/2 legs $65
          <br />
          Full Arms $40
          <br />
          1/2 Arms $30
          <br />
          Underarms $17
          <br />
          Thong &amp; Buttocks $35
          <br />
          <br />
          Facial Waxing
          <br />
          Eyebrow Shaping $20
          <br />
          Upper Lip $12
          <br />
          Eyebrow &amp; Upper Lip $25
          <br />
          Chin $12
          <br />
          Side of Face $12
          <br />
          Full Face $40
          <br />
          <br />
          Tinting
          <br />
          Eyebrow Tint $15
          <br />
          Lash Tint $30
          <br />
          Brow &amp; Lash Tint $40
          <br />
          <br />
          <br />
          Mens Waxing
          <br />
          <br />
          Full Back $55
          <br />
          Shoulders $20
          <br />
          Full Chest and Stomach $55
        </p>
        {close}
      </article>
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
