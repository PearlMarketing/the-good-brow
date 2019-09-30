import PropTypes from 'prop-types'
import React from 'react'

import Collapse from './Collapse'

class FAQ extends React.Component {
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
        id="faq"
        className={`${this.props.article === 'faq' ? 'active' : ''} ${
          this.props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">FAQ</h2>
        {/* <span className="image main">
          <img src={pic02} alt="" />
        </span> */}
        <Collapse title="How to Prepare for your appointment:">
        No Alcohol or Caffeine 24-48 hours before appointment<br/>No Advil or blood thinning medication for 48 hours before appointment<br/>No waxing or tinting 72 hours before appointment<br/>No Botox or fillers 2 weeks before or 2 weeks after your appointment<br/>Do not arrive with a sunburn, or your appointment will be rescheduled
          </Collapse>
          <Collapse title="How to know if you are NOT a good candidate for Microblading:">
          You are Pregnant or Nursing<br/>Diabetic (Dr. Note required)<br/>Chemotherapy (Dr. Note required)<br/>Auto-Immune Disease<br/>History of Keloids or Hypertrophic scarring<br/>Thyroid Condition (Dr. Note required)<br/>Pacemaker or major heart problems<br/>Epileptic<br/>Uncontrolled High Blood Pressure
          </Collapse>
          <Collapse title="How long is a Microblading Appointment?">
          I book you for a minimum of 2 hours.
          </Collapse>
          <Collapse title="Can I bring my kids to this appointment?">
          I please ask that you do not bring children. Your brows need my full attention!
          </Collapse>
          <Collapse title="Does it hurt?">
          I use a topical numbing agent. Most of my clients dont feel a thing!
          </Collapse>
          <Collapse title="How long does it last?">
          Typically, for most clients, about 12-18 months after the 6-8 week toouch up. <br/>At home care and being mindful of your new brows is extremely encouraged!<br/>Tanning, exfoliants, smoking, excessive sweating, and salt water swimming are some factors to early fading in some people. 
          </Collapse>
          <Collapse title="How long will it take to heal?">
          Surface healing takes about 10 days after your initial appointment. <br/>I will give you a take home aftercare sheet to go over any questions you may have before you come back for your touch up visit.
          </Collapse>
        {close}
      </article>
    )
  }
}

FAQ.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default FAQ
