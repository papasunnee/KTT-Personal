import React, {Component} from 'react'

const Honours = () => {
    return (
        <div id="education" className="cvitae-section cvitae-education">
            <div className="cvitae-container">
                <div className="cvitae-section-content">
                    <div className="content-left">
                        <h3 className="cvitae-section-title">Honours</h3>
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
                                <div className="collapsible-header">Award , <span className="year">2005</span></div>
                                <div className="collapsible-body"><p>Award Details Here</p></div>
                            </li>
                            <li>
                                <div className="collapsible-header">Award , <span className="year">2003</span></div>
                                <div className="collapsible-body"><p>Award Details Here</p></div>
                            </li>
                            <li>
                                <div className="collapsible-header">Award , <span className="year">2001</span></div>
                                <div className="collapsible-body"><p>Award Details Here</p></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Honours