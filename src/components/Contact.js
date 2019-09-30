import PropTypes from 'prop-types'
import React from 'react'

class Contact extends React.Component {
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
        id="contact"
        className={`${this.props.article === 'contact' ? 'active' : ''} ${
          this.props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">Contact</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d181.77555035546533!2d-71.53423466946826!3d43.200914195932995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e26a8e64af7e0d%3A0x3fd0fe812309399!2s48%20S%20Main%20St%2C%20Concord%2C%20NH%2003301!5e0!3m2!1sen!2sus!4v1569818448684!5m2!1sen!2sus"
          width="600"
          height="450"
          frameborder="0"
          style={{ border:0 }}
          allowfullscreen=""
        ></iframe>
        48 South Main Street, Concord, NH 03301
        <br />
        <br />
        Phone: 603-260-7406
        <br />
        Email: thegoodbrowconcord@gmail.com
        <br />
        Instagram: itsjustemily.pmu
        <br />
        <br />
        HOURS
        <br />
        Sunday: Closed
        <br />
        Monday: 10am - 5pm
        <br />
        Tuesday: 9:30am - 2pm
        <br />
        Wednesday: 10am - 5pm
        <br />
        Thursday: 9:30am - 2pm
        <br />
        Friday: 9:30am - 2pm
        <br />
        Saturday: Closed
        <br />
        {/* <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form> */}
        {/* <ul className="icons">
            <li>
              <a
                href="https://twitter.com/"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
          </ul> */}
        {close}
      </article>
    )
  }
}

Contact.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Contact
