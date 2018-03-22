import React , {Component} from 'react'
import Link from 'next/link'

const Menu = () => {
    return(
        <div className="cvitae-menu-wrapper bottom">
            <nav className="cvitae-main-nav ">
                <ul>
                    <li className="waves-effect waves-cvitae scroll"><a href="#about">About</a></li>
                    <li className="waves-effect waves-cvitae scroll"><a href="#education">Education</a></li>
                    <li className="waves-effect waves-cvitae"><a href="portfolio">Portfolio</a></li>
                    <li className="cvitae-home waves-effect scroll"><a href="#home">KTT <small>(SAN)</small></a></li>
                    <li className="waves-effect waves-cvitae"><a href="/politics">Politics</a></li>
                    <li className="waves-effect waves-cvitae scroll"><a href="#experience">Honours</a></li>
                    <li className="waves-effect waves-cvitae"><a href="/blog">Blog</a></li>
                    <li className="waves-effect waves-cvitae scroll"><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}
export default Menu


