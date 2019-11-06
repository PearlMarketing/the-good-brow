import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        {/* <div className="logo">
            <img src="" />
        </div> */}
        <div className="content">
            <div className="inner">
                <h1>The Good Brow</h1>
                <p>Microblading in Downtown Concord, NH.</p>
                <Button href="https://www.vagaro.com/thegoodbrow" target="_blank">Book Now</Button>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('services')}}>Services</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('waxing')}}>Waxing</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('microblading')}}>What is Microblading?</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('policies')}}>Policies</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('faq')}}>FAQ</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
