import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        {/* <div className="logo">
            <img src="" />
        </div> */}
        <div className="content">
            <div className="inner">
                <h1>The Good Brow</h1>
                <p>Microblading in Downtown Concord, NH.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('services')}}>Services</a></li>
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
