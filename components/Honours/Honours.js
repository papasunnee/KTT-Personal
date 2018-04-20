import React, {Component} from 'react'

const Honours = () => {
    return (
        <div id="education" className="turaki-section turaki-education">
            <div className="turaki-container">
                <div className="turaki-section-content">
                    <div className="content-left">
                        <h3 className="turaki-section-title">Honours</h3>
                        <p>
                        KT Turaki is the recipients of numerous awards and honors for Governing Excellence, Exemplary Leadership, Community Activism, Promotion of Law & Order, Contribution to Legal Body of Knowledge and also traditional Chieftancy titles.  
                        </p>
                    </div>
                    <div className="content-right">
                        <ul className="collapsible" data-collapsible="accordion">
                            <li>
                                <div className="collapsible-header">Award</div>
                                <div className="collapsible-body"><p>Award Details Here</p></div>
                            </li>
                            <li>
                                <div className="collapsible-header">Award</div>
                                <div className="collapsible-body"><p>Award Details Here</p></div>
                            </li>
                            <li>
                                <div className="collapsible-header">Award</div>
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