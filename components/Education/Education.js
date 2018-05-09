import React, {Component} from 'react'

const Education = () => {
    return (
        <div id="education" className="turaki-section turaki-education">
            <div className="turaki-container">
                <div className="turaki-section-content">
                    <div className="content-left">
                        <h3 className="turaki-section-title">Educaton</h3>
                        <img src="./static/img/education/dede.png" style={{ width : '100%', marginBottom : '10px'}} />
                        <p style={{fontWeight : 'bold', fontSize: '18px'}}>
                            Kabiru's passion for social justice, fairness and the rule of law prompted his decision to study law.
                        </p>
                    </div>
                    <div className="content-right">
                      <div className="achievement-container">
                        <p>
                          In accordance with the cherished values  of the revered Gwandu Emirate, the young
                          Kabiru was enrolled in Arabic school, a step which subsequently moulded
                          his character thereby preparing him for the awaited challenges of life.
                        </p>
                        <p>
                          He began western learning at the Nasarawa Primary School, Birnin Kebbi. From that incipient stage, Kabiru portrayed  clear signs of a gifted child.
                          This was evident in his appointment as Deputy Head Boy and Time Keeper of the School.
                        </p>

                        <p>
                          On completion of his study at that level, Kabiru proceeded to the famous
                          Barewa College, Zaria where his brilliance and leadership qualities shone, this was to be
                          crowned with appointment as Deputy House Captain, Suleiman Barau House and President Young
                          Farmer's  club.
                        </p>

                        <p>
                          After obtaining Senior School Certificate, Kabiru was admitted into the College of Arts and Science, Sokoto
                          for his A Levels (IJMB) where he obtained distinctions in all his papers.
                          This earned him admission into one of Nigeria's respected Universities, UniJos.
                        </p>

                        <p>
                          Kabiru's passion for social justice, fairness and the rule of law saw him opting to study law.
                          He graduated with honour and proceeded to the Nigerian Law School, Lagos where in 1986 he was
                          called to the Bar.
                        </p>

                        <p>
                          Upon graduation from the Law School, Kabiru Tanimu Turaki opted to be a legal practitioner as an avenue to impact society.
                          As a fresh wig eager to distinguish himself in the profession, Barrister Kabiru Tanimu Turaki went to Kano where he became a
                          senior counsel with Alhaji Tijjani Abdullahi and company(solicitors and Advocates)in 1987.
                        </p>
                      </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .content-right p{
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

export default Education
