import PropTypes from 'prop-types'
import React from 'react'

import Collapse from '../../Collapse'

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
        {/* <span className="image main">
          <img src={pic02} alt="" />
        </span> */}
        <Collapse title="Consultation" price="$25 (30 minutes)">
          Consult cost goes towards your microblading appointment if you decide
          to book! Email consults are also available upon request.
          <br />
          <br />
          Consult includes going over any questions you may have, a pre-draw of
          desired brow look, choosing a custom color, and what to expect after
          your initial appontment.
          <br />
          <br />
          Not all clients are good candidates for Microblading. 
          <br />
          <br />
          If you have any medical issues that you feel might be a
          contraindication, then I require you get clearance from your doctor.
        </Collapse>
        <Collapse title="Microblading" price="$425 (2 hours)">
          Hairstrokes throughout the entire brow. 
          <br />
          <br />
          If you are looking for a natural enhancement, this is the option best
          suited for you!
          <br />
          <br />
          6-8 week touch ups are recommended for best long term results
        </Collapse>
        <Collapse title="Powder Brows" price="$450 (2 hours)">
          Think pomade and powder makeup-look. This is different from
          Microblading, where it doesn't create hair strokes, but more of a
          "filled in" effect. Can be achieved via a manual handheld tool or the
          use of a tattoo gun.
          <br />
          <br />
          This works best for oily skin types as well.
          <br />
          <br />
          6-8 week touch ups are recommended for best long term results.
        </Collapse>
        <Collapse title="Blade &amp; Shade Brows" price="$450 (2 hours)">
          Blending hairstrokes and shading together for added depth and
          definition to your brows.
          <br />
          <br />
          6-8 week touch ups are recommended for best long term results.
        </Collapse>
        <Collapse title="Touch-up (6-8 weeks after initial appontment)" price="$75 (1 hour)" />
        <Collapse title="Annual Touch-Up (Existing clients only)" price="$150 (1 hour +)" />
        <p>*Your safety is important to me! I am NH Blood-borne Pathogen Certified &amp; I use all disposable tools and cruelty free, organic pigments.*</p>
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
