const About = () => {
    return (
        <div id="about" className="turaki-section turaki-about-me">
            <div className="turaki-container">
                <div className="turaki-section-content">

                    <div className="content-right short-bio">
                        <h3 className="turaki-section-title" style={{fontSize : '40px', lineHeight: '46px'}}>About KT TURAKI</h3>
                        <p style={{fontSize : '17px'}}>
                        <strong>Kabiru Tanimu Turaki</strong>, SAN, FCIArb, FABs, FCIDA, HCH.Hm, MPIS, MHCA (Dan Masanin Gwandu, Zarumman Kabbi) (born 3 April 1957) is a <strong>Senior Advocate of Nigeria</strong>,
                        a former Minister of Special Duties and Inter – Governmental Affairs, former Supervising Minister, Ministry of Labour, having served from 2013 – 2015 and
                        2014 – 2015 respectively and current Chairman of PDP former Ministers’ Forum of Nigeria.
                        He is presently a member of People’s Democratic Party’s Board of Trustees (BOT).
                        </p>
                    </div>
                    <div className="content-left about">
                        <div className="pic">
                            <img className="img-responsive" src="./static/img/bio/side.png" alt="KTT - SAN"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
