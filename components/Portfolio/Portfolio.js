import React, {Component} from 'react'

const Portfolio = () => {
    return (
        <div id="education" className="cvitae-section cvitae-education">
            <div className="cvitae-container">
                <div className="cvitae-section-content">
                    <div className="content-left">
                        <h3 className="cvitae-section-title">Portfolio</h3>
                        <p>To enrich knowledge, I am lucky to get certified from several famous institutions in our locality. Here I enlisted my top certifications.</p><p>Beside there, I had been awarded as Top Scorer in Math &amp; Physics during my grad school.</p>
                    </div>
                    <div className="content-right">
                        <ul className="collapsible" data-collapsible="accordion">
                            <li>
                                <div className="collapsible-header">Portfolio Name, <span className="year">2005</span></div>
                                <div className="collapsible-body"><p>Portfolio Details Here</p></div>
                            </li>
                            <li>
                                <div className="collapsible-header">Portfolio Name, <span className="year">2003</span></div>
                                <div className="collapsible-body"><p>Portfolio Details Here</p></div>
                            </li>
                            <li>
                                <div className="collapsible-header">Portfolio Name, <span className="year">2001</span></div>
                                <div className="collapsible-body"><p>Portfolio Details Here</p></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio