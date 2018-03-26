import React , {Component} from 'react'
import Link from 'next/link'

export default (props) => {
    return(
        <div className={"cvitae-menu-wrapper " + (props.isBottom ? "bottom" : "")}>
            <nav className="cvitae-main-nav ">
                <ul>
                    {/* <li className="waves-effect waves-cvitae scroll"><a href="#about">About</a></li>
                    <li className="waves-effect waves-cvitae"><a href="./education.html">Education</a></li>
                    <li className="waves-effect waves-cvitae"><a href="./profession.html">Profession</a></li>
                    <li className="cvitae-home waves-effect scroll"><a href="./index.html">KTT <small>(SAN)</small></a></li>
                    <li className="waves-effect waves-cvitae"><a href="./politics.html">Politics</a></li>
                    <li className="waves-effect waves-cvitae scroll"><a href="./honours.html">Honours</a></li>
                    <li className="waves-effect waves-cvitae scroll"><a href="#contact">Contact</a></li> */}

                    <li className="waves-effect waves-cvitae scroll"><a href="#about">About</a></li>
                    <li className="waves-effect waves-cvitae"><Link prefetch href="/education"><a>Education</a></Link></li>
                    <li className="waves-effect waves-cvitae"><Link prefetch href="/profession"><a>Profession</a></Link></li>
                    <li className="cvitae-home waves-effect scroll"><Link prefetch href="/"><a href="#home">KTT <small>(SAN)</small></a></Link></li>
                    <li className="waves-effect waves-cvitae"><Link prefetch href="/politics"><a>Politics</a></Link></li>
                    <li className="waves-effect waves-cvitae"><Link prefetch href="/honours"><a>Honours</a></Link></li>
                    <li className="waves-effect waves-cvitae scroll"><Link prefetch href="#contact"><a>Contact</a></Link></li>
                </ul>
            </nav>
        </div>
    )
}
