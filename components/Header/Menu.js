import React , {Component} from 'react'
import Link from 'next/link'

export default (props) => {
    return(
        <div className={"turaki-menu-wrapper " + (props.isBottom ? "bottom" : "")}>
            <nav className="turaki-main-nav ">
                <ul>
                    <li className="waves-effect waves-turaki scroll"><a href="./index.html#about">About</a></li>
                    <li className="waves-effect waves-turaki"><a href="./education.html">Education</a></li>
                    <li className="waves-effect waves-turaki"><a href="./profession.html">Profession</a></li>
                    <li className="turaki-home waves-effect scroll"><a href="./index.html">KTT <small>(SAN)</small></a></li>
                    <li className="waves-effect waves-turaki"><a href="./politics.html">Politics</a></li>
                    <li className="waves-effect waves-turaki scroll"><a href="./honours.html">Honours</a></li>
                    <li className="waves-effect waves-turaki scroll"><a href="#contact">Contact</a></li> 

                    {/* <li className="waves-effect waves-turaki scroll"><a href="/#about">About</a></li>
                    <li className="waves-effect waves-turaki"><Link prefetch href="/education"><a>Education</a></Link></li>
                    <li className="waves-effect waves-turaki"><Link prefetch href="/profession"><a>Profession</a></Link></li>
                    <li className="turaki-home waves-effect scroll"><Link prefetch href="/"><a href="#home">KTT <small>(SAN)</small></a></Link></li>
                    <li className="waves-effect waves-turaki"><Link prefetch href="/politics"><a>Politics</a></Link></li>
                    <li className="waves-effect waves-turaki"><Link prefetch href="/honours"><a>Honours</a></Link></li>
                    <li className="waves-effect waves-turaki scroll"><Link prefetch href="#contact"><a>Contact</a></Link></li> */}
                </ul>
            </nav>
        </div>
    )
}
