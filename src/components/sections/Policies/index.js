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
        <p>
          POLICIES FOR MICROBLADING
          <br />
          <br />
          Please arrive 15 minutes before your scheduled appointment to fill out
          paperwork.
          <br />
          <br />
          There are many factors that affect the healing process that we have no
          control over  (how you take care of your brow tattoo, how your skin
          heals and retains pigment, skin type etc.). There is absolutely no
          guarantee with healed results.
          <br />
          <br />
          All appointments require a $100 deposit prior to booking.  Deposits
          are non-refundable but transferable to re-schedule an appointment if
          48 hours notice is given. The amount is deducted from the final cost,
          which is due the day of your service.
          <br />
          <br />I accept Cash and major credit cards. I do not offer any
          refunds.
          <br />
          <br />
          As these appointments take considerable time, I require 48 hours of
          notice to reschedule an appointment. Cancellations with less than 48
          hours notice will be charged a $50 fee. If you cancel with less than
          24 hours notice the full deposit will be automatically forfeited.
          <br />
          <br />
          Please contact me if you are not able to make your appointment or if
          you are running late. I understand last minuite circumstances happen
          and I will do my best to accommodate you. Being more than 15 minutes
          late may result in a forfeit of your deposit and re-scheduling of your
          appointment.
          <br />
          <br />
          NO SHOW APPOINTMENTS: The deposit will be forfeited if the client
          fails to show up to their appointment. I respect your time, please
          respect mine.
          <br />
          <br />
          Prices are subject to change at anytime. You must be 18 years or have
          Parental written consent to get Microblading.
          <br />
          <br />
          Microblading is considered an invasive procedure, as a result you will
          not be able to donate blood for one year.
          <br />
          <br />I do not do touch-ups on other artists work.
          <br />
          <br />
          <br />
          <br />
           POLICIES FOR WAXING
          <br />
          <br />
          First time clients, please arrive 15 minutes before your scheduled
          appointment to fill out paperwork.
          <br />
          <br />
          In order to hold any appointment over 30 minutes you must provide a
          valid credit or debit card to place on file. Dont worry, you will not
          be charged upon booking. You can still pay with a different card or
          cash upon checking out.
          <br />
          <br />
          If you are unable to keep your appointment I ask that you give me
          24-hours advance notice. If you cancel with less than 24-hour notice
          you are subject to a 50% fee.
          <br />
          <br />
          If you do not show up for your appointment (no show), you will be
          charged 100% of the full service price of all appointments booked.
          <br />
          <br />I respect your time, please respect mine. Thank you!
        </p>
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
