import React , {Component} from 'react'
import Link from 'next/link'

export default (props) => {
    return(
      <div className="turaki-mobile-navigation">
        <div className="nav-header"><span className="ti-menu mobile-site-menu"></span><a className="mobile-site-title" href="#">Kabiru Tanimu (SAN)</a></div>
        <nav className="turaki-mobile-nav scroll">
          <ul>
            {/* <li><a className="waves-effect waves-turaki" href="./index.html">KTT <small>(SAN)</small></a></li>
            <li><a className="waves-effect waves-turaki" href="./index.html#about">About</a></li>
            <li><a className="waves-effect waves-turaki" href="./education.html">Education</a></li>
            <li><a className="waves-effect waves-turaki" href="./profession.html">Profession</a></li>
            <li><a className="waves-effect waves-turaki" href="./politics.html">Politics</a></li>
            <li><a className="waves-effect waves-turaki" href="./honours.html">Honours</a></li>
            <li><a className="waves-effect waves-turaki" href="#contact">Contact</a></li> */}

            <li><a className="waves-effect waves-turaki" href="./index">KTT <small>(SAN)</small></a></li>
            <li><a className="waves-effect waves-turaki" href="./index#about">About</a></li>
            <li><a className="waves-effect waves-turaki" href="./education">Education</a></li>
            <li><a className="waves-effect waves-turaki" href="./profession">Profession</a></li>
            <li><a className="waves-effect waves-turaki" href="./politics">Politics</a></li>
            <li><a className="waves-effect waves-turaki" href="./honours">Honours</a></li>
            <li><a className="waves-effect waves-turaki" href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    )
}
