import React, {Component} from 'react'

const Politics = () => {
    return (
        <div id="education" className="turaki-section turaki-education">
            <div className="turaki-container">
                <div className="turaki-section-content">
                    <div className="content-left">
                        <h3 className="turaki-section-title">Politics</h3>
                        <p>
                        KT Turaki's political philosophy, is not adding more to the abundance of those who have much, it is providing enough for those who have little.      
                        </p>
                        <p>
                        His mission in politics is to reduce inequality and enhance prosperity for all Nigerians regardless of tribe, religion, age or political affiliation.   
                        </p>
                    </div>
                    <div className="content-right">
                        <ul className="collapsible" data-collapsible="accordion">
                            <li>
                                <div className="collapsible-header">Office Held</div>
                                <div className="collapsible-body"><p>Political Details Here</p></div>
                            </li>
                            <li>
                                <div className="collapsible-header">Office Held</div>
                                <div className="collapsible-body"><p>Political Details Here</p></div>
                            </li>
                            <li>
                                <div className="collapsible-header">Office Held</div>
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