import React from 'react'
import pic01 from '../images/pic01.jpg'

const About = props => {
  return (
    <article id={props.id} className={props.className} style={props.style}>
      <h2 className="major">About Me</h2>
      <span className="image main">
        <img src={pic01} alt="" />
      </span>
      <p>
        Hi! My name is Emily White and I am the owner of The Good Brow, LLC
        located in Downtown Concord, NH.  Ive been a licensed esthetician since
        2009. Ask any one of my friends and they will tell you, I have always
        been "all about the brows." So, in 2016 I attended Microblading
        training. Since then, the sky has been the limit. After a few more
        trainings and completing an apprenticeship for a State of NH Tattoo
        License, This was a dream come true for me! Work on brows and make women
        feel confident?? HELL YES!
      </p>
      <p>
        Your brows should be the last thing you have to worry about! Let me
        help. Let me make your morning routine that much easier.  My goal is for
        you to ALWAYS feel and look your best.
      </p>
      <p>
        Trust me when I say, I know the true hustle of everyday life and I am
        happy to be here to help make you all feel extra beautiful!
      </p>
      <p>
        I can't wait to meet you!
        <br />
        XO
      </p>
      {props.children}
    </article>
  )
}

export default About