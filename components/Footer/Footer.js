import React , {Component} from 'react'

const Footer = (props) => {
    return (
        
              <div id="contact" className="turaki-section turaki-contact footer">
                  <div className="turaki-container">
                      <div className="turaki-section-content">
                          <div className="content-left"><h3 className="turaki-section-title">Contact Me</h3><p>I am acessible at all times via this platform. Please leave a message or inquiry.<br/>Thank you </p> <strong>KABIRU TANIMU TURAKI (SAN)</strong></div>
                          <div className="content-right"><form method="post">
                              <div className="row">
                                  <div className="col s6">
                                      <div className="form-input"><input type="text" value="Your name*"/><span className="underline"></span></div>
                                  </div>
                                  <div className="col s6">
                                      <div className="form-input"><input type="text" value="Email*"/><span className="underline"></span></div>
                                  </div>
                              </div>
                              <div className="row">
                                  <div className="col s6">
                                      <div className="form-input"><input type="text" value="Phone number*"/><span className="underline"></span></div>
                                  </div>
                                  <div className="col s6">
                                      <div className="form-input"><input type="text" value="Website"/><span className="underline"></span></div>
                                  </div>
                              </div>
                              <div className="row">
                                  <div className="col s12">
                                      <div className="form-textarea"><textarea >{props.textareaValue || 'Your message*'}</textarea><span className="underline"></span></div>
                                      <div className="form-submit"><button type="submit" className="waves-effect waves-turaki" style={{backgroundColor : 'red'}}>Submit</button><span className="underline"></span></div>
                                  </div>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
              <div className="footer-content" style={{paddingBottom : '1px', backgroundColor : '#000000'}}>
                  <div className="turaki-container">
                  <blockquote style={{color : 'white', textAlign : 'center', padding : '40px 15px', lineHeight : '40px', fontSize : '35px'}}>The great leaders are like the best conductors - they reach beyond the notes to reach the magic in the players.
                    <small style={{color : 'red'}}> --  <em>Blaine Lee</em></small>
                  </blockquote>
                    <ul className="links">
                        <li className="tooltipped" data-position="top" data-delay="50" data-tooltip="Follow on Twitter">
                            <a href="https://twitter.com/KTTurakiSAN" target="_blank"><span className="ti-twitter"></span>Twitter Profile</a>
                        </li>
                        <li className="tooltipped" data-position="top" data-delay="50" data-tooltip="Goto Top">
                            <a href="#" data-hover="Goto Top" className="goto-top"><span className="ti-arrow-up"></span>Goto Top</a>
                        </li>
                        <li className="tooltipped" data-position="top" data-delay="50" data-tooltip="Follow on Facebook">
                            <a href="http://facebook.com/kabirutanimu.turakisan" target="_blank"><span className="ti-facebook"></span>Facebook Profile</a>
                        </li>
                    </ul>
                    <hr/>
                    <p className="copyright">Powered by <a href="http://altitude-tech.com" target="_blank" style={{color : 'red'}}> Altitude Technology</a></p>
                   </div>
              </div>
          </div>
      
    )
}

export default Footer