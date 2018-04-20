import React, {Component} from 'react'

const Honours = () => {
    return (
        <div id="education" className="turaki-section turaki-education">
            <div className="turaki-container">
                <div className="turaki-section-content">
                    <div className="content-left">
                        <h3 className="turaki-section-title">Honours</h3>
                        <p style={{fontSize: '18px'}}>
                            Kabiru Tanimu Turaki is a recepient of numerous awards in politics, business and community service.
                        </p>
                    </div>
                    <div className="content-right">
                      <div className="achievement-container">
                        <p>
                          In recognition of his contribution to the development of Nigeria and humanity, Kabiru Tanimu Turaki has been honoured throughout Nigeria and outside the country. Among his honours and awards are:
                        </p>

                      </div>
                        <ul className="collapsible" data-collapsible="accordion">
                          {AWARDS.map((award, index)=>(
                            <li key={index}>
                              <div className="collapsible-header">{award}</div>
                            </li>
                          ))}
                        </ul>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .content-right p {
                    margin : 20px auto
                }
                @media (max-width: 767px){
                  .achievement-container {
                      padding: 20px 50px
                  }
                }
            `}
            </style>
        </div>
    )
}


const AWARDS = [
  'norary Life Member, Law Student Society, Bayaro University, Kano',
  'Patron, Law Students Society, University of Jos',
  'Patron, Kebbi State Student Association',
  'Patron, “Tashi Mana” Theatre, Literacy and Debate Club, Waziri Umaru Federal Polytechnic, Birnin Kebbi',
  'Patron, Association of Deaf and Dumb, Kano State Branch',
  'Patron, Gwandu Emirate Student Association',
  'Life Patron, National Association of Nigerian Students (NANS)',
  'Recipient of Sheikh Abdullahi Fodio Award',
  'Recipient of National Association of Mathematical Science Student of Nigeria (NAMSSN) Award of Excellence',
  'Recipient of National Association of Kebbi State Students (NUKESS) Star Award',
  'Recipient of Distinguished Alumnus of the Year Award by SUG, University of Jos',
  'Recipient of Distinguished Personality of the Year Award by Law Students, University of Jos',
  'Recipient of African Meritorious Service Award for Good Leadership',
  'Recipient of Nigerian Youth Ambassador Award',
  'Recipient of Arewa Publishers Union Distinguished Merit Award',
  'Recipient of BEEMA Communications Ltd. Golden Star Award',
  'Recipient of Barewa Old Boys Association Merit Award',
  'Recipient of Zenith International Award for Excellence',
  'Recipient of Icon of Hope Award by National Association of Polytechnic Students (NAPS)',
  'Recipient of Nigerian Bar Association, Kano Branch, Merit Award',
  'Recipient of Nigerian Students Merit Award',
  'Recipient of Glibalink International Leadership Gold Award',
  'Recipient of NYLF Eceptional Leadership Award',
  'Recipient of LAWSAN Merit Award',
  'Recipient of 2009 Kwame Nkrumah Distinguished Leadership Award',
  'Recipient of AIDO Communication African Outstanding Leader and Philanthropist Award, (Ghana)',
	'Recipient of African Role Model Leadership Gold Award for Excellence',
	'Recipient of African Credibility Award (ACA)',
	'Recipient of Association of Zamfara, Kebbi and Sokoto States Student (AZAKSS) Merit Award',
	'Recipient of Fellow of the Chartered Institute of Loan and Risk Management of Nigeria Award',
	'Recipient of Fellow of the Civilian Institute of Democratic Administration Award',
	'Recipient of a distinguished Award by Body of Senior Advocate of Nigeria (BOSAN) Abuja Branch',
	'Recipient of Nigeria Union of Local Government (NULGE) Award',
	'Recipient of Special Award by Belarusian Security Organization (KGB)',
	'Recipient of Special Recognition Award by BAREWA Old Boys Association (BOBA) National Secretariat',
	'Recipient of Special Letter of Commendation for National Service by President Goodluck Ebele Jonathan, GCFR',
]

export default Honours
