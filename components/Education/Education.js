import React, {Component} from 'react'

const Education = () => {
    return (
        <div id="education" className="cvitae-section cvitae-education">
            <div className="cvitae-container">
                <div className="cvitae-section-content">
                    <div className="content-left">
                        <h3 className="cvitae-section-title">Educaton</h3>
                        <img src="/static/img/education/library.jpg" style={{ width : '100%'}} />
                        <br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                    </div>
                    <div className="content-right">
                        <ul className="collapsible" data-collapsible="accordion">
                            <li>
                                <div className="collapsible-header">Most recent achieved degree, <span className="year">2005</span></div>
                                <div className="collapsible-body"><p>Successfully passed PAD’ on year 2005 scoring CGPA 4.00 out of 4.00. The study fields were Cpmputer Architecture, Calculus, Fundamental of Physics, Chemistry, Integral Mathematics.</p></div>
                            </li>
                            <li>
                                <div className="collapsible-header">Previously achieved degree, <span className="year">2003</span></div>
                                <div className="collapsible-body"><p>Successfully passed PAD’ on year 2003 scoring CGPA 4.00 out of 4.00. The study fields were Cpmputer Architecture, Calculus, Fundamental of Physics, Chemistry, Integral Mathematics.</p></div>
                            </li>
                            <li>
                                <div className="collapsible-header">Previously achieved degree, <span className="year">2001</span></div>
                                <div className="collapsible-body"><p>Successfully passed PAD’ on year 2001 scoring CGPA 4.00 out of 4.00. The study fields were Cpmputer Architecture, Calculus, Fundamental of Physics, Chemistry, Integral Mathematics.</p></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education