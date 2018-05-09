import React, {Component} from 'react'

const Portfolio = () => {
    return (
        <div id="education" className="turaki-section turaki-education">
            <div className="turaki-container">
                <div className="turaki-section-content">
                    <div className="content-left">
                        <h3 className="turaki-section-title">Profession</h3>
                        <p style={{fontSize: '18px'}}>A lawyer by profession and a Senior Advocate of Nigeria</p>
                    </div>
                    <div className="content-right">
                      <div className="achievement-container">
                       <p>
                       Within two years, the young lawyer established himself, he became noted in legal circle of Kano and environs. This stride gave birth to K.T. Turaki and co.
                       In 1989 which turned out to become one of the most successful law firms in Nigeria.
                       </p>

                       <p>
                        As a lawyer, Kabiru Tanimu Turaki practiced in virtually every Court and Tribunal in the country,
                        from the Magistrate Court, High Court, Appellate Court, Miscellaneous Offences Tribunal, Elections Petition Tribunals all through to the Supreme Court.
                        In all of these, he recorded tremendous successes beyond the ordinary.
                        </p>

                        <p>
                            His desire for justice, fairness and equity informed the choice of law as a carrier which he built successfully, taking up people's cases and rendering services PROBONO.
                            He was appointed a member of the Kano State Law Reporting Committee in 1999, member of the Committee for the review of current legislations in Kano State
                            and served in the Committee that reviewed Northern State's Penal Code law in 1992. His outstanding  accomplishments and awesome legal carrier in Kano led to the record
                            breaking appointment to the prestigious rank of Senior Advocate of Nigeria, SAN ;the first in the entire former North Western State(present day Sokoto, Kebbi, Zamfara and environs).
                        </p>
                        <p>
                        His membership includes but not limited to ;
                        <ol style={{marginLeft : '20px'}}>
                            <li>1. Nigeria Bar Association</li>
                            <li>2. African Bar Association</li>
                            <li>3. Commonwealth lawyers Association</li>
                            <li>4. International Bar Association</li>
                            <li>5. Lawyers in defence of Human Rights</li>
                            <li>6. Chartered Institute of Arbitrators</li>
                        </ol>

                        </p>
                        <p>
                            His dexterity and legal gait prompted a nomination for him to help resolve crises within the Nigeria Bar Association in 1993.
                        </p>

                        <p>
                        His immense contribution to the development of law and the legal practice in Nigeria led to his appointment as a Notary
                        Public by the Chief Justice of Nigeria and subsequent elevation to Senior Advocate in 2002.
                        </p>

                        <p>
                        Turaki is a member of National Executive Committee of the Nigeria Bar Association, Chairman NBA Committee on the Judiciary as well
                        as a member of the governing Board of Nigerian judicial Institute.
                        </p>
                        <p>
                        Turaki is, in every ramification a success story, a role model to the youth, a becon of hope to the old, a pacesetter to the strong
                        and an inspiration to society. He is unyielding as a patriot with abiding faith in Nigerias' continuous corporate existence as a federation.
                        </p>
                      </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .content-right p {
                    margin : 20px auto
                }
                @media (max-width: 767px){
                  .achievement-container {
                      padding: 70px 50px
                  }
                }
            `}
            </style>
        </div>
    )
}

export default Portfolio
