import React, {Component} from 'react'

const Politics = () => {
    return (
        <div id="education" className="turaki-section turaki-education">
            <div className="turaki-container">
                <div className="turaki-section-content">
                    <div className="content-left">
                        <h3 className="turaki-section-title">Politics</h3>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,    
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        </p>
                    </div>
                    <div className="content-right">
                        <ul className="collapsible" data-collapsible="accordion">
                            <li>
                                <div className="collapsible-header">Office Held, <span className="year">2005</span></div>
                                <div className="collapsible-body"><p>Political Details Here</p></div>
                            </li>
                            <li>
                                <div className="collapsible-header">Office Held, <span className="year">2003</span></div>
                                <div className="collapsible-body"><p>Political Details Here</p></div>
                            </li>
                            <li>
                                <div className="collapsible-header">Office Held, <span className="year">2001</span></div>
                                <div className="collapsible-body"><p>Political Details Here</p></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Politics