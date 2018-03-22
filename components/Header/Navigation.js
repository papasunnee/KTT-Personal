import React, { Component} from 'react'

const Navigation = () => {
    return(
        <div className="cvitae-mobile-navigation">
            <div className="nav-header">
                <span className="ti-menu mobile-site-menu"></span><a className="mobile-site-title" href="#home">Dana Anderson</a>
            </div>
            <nav className="cvitae-mobile-nav scroll">
                <ul>
                    <li><a className="waves-effect waves-cvitae" href="#home">Home</a></li>
                    <li><a className="waves-effect waves-cvitae" href="#about">About</a></li>
                    <li><a className="waves-effect waves-cvitae" href="#skills">Skills</a></li>
                    <li><a className="waves-effect waves-cvitae" href="#education">Education</a></li>
                    <li><a className="waves-effect waves-cvitae" href="#portfolio">Portfolio</a></li>
                    <li><a className="waves-effect waves-cvitae" href="#testimonial">Testimony</a></li>
                    <li><a className="waves-effect waves-cvitae" href="#experience">Experience</a></li>
                    <li><a className="waves-effect waves-cvitae" href="#blog">Blog</a></li>
                    <li><a className="waves-effect waves-cvitae" href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation