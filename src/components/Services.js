import PropTypes from 'prop-types'
import React from 'react'

import Collapse from './Collapse'
import pic02 from '../images/pic02.jpg'

class Services extends React.Component {
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
        id="services"
        className={`${this.props.article === 'services' ? 'active' : ''} ${
          this.props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">Services</h2>
        <span className="image main">
          <img src={pic02} alt="" />
        </span>
        <p>
          Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu, at
          eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna
          nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin
          mauris nec lorem luctus ultrices.
        </p>
        <Collapse title="Consultation" price="$25 (30 minutes)" collapsed>
          <p>
            Consult cost goes towards your microblading appointment if you
            decide to book! Email consults are also available upon request.
            <br />
            <br />
            Consult includes going over any questions you may have, a pre-draw
            of desired brow look, choosing a custom color, and what to expect
            after your initial appontment.
            <br />
            <br />
            Not all clients are good candidates for Microblading. 
            <br />
            <br />
            If you have any medical issues that you feel might be a
            contraindication, then I require you get clearance from your doctor.
          </p>
        </Collapse>
        {close}
      </article>
    )
  }
}

Services.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Services
