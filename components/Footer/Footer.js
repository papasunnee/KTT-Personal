import React , {Component} from 'react'

const Footer = (props) => {
    return (
        
              <div id="contact" className="cvitae-section cvitae-contact footer">
                  <div className="cvitae-container">
                      <div className="cvitae-section-content">
                          <div className="content-left"><h3 className="cvitae-section-title">Contact Me</h3><p>I am acessible at all times via this platform. Please leave a message or inquiry.<br/>Thank you </p> <strong>KABIRU TANIMU TURAKI (SAN)</strong></div>
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
                                      <div className="form-submit"><button type="submit" className="waves-effect waves-cvitae" style={{backgroundColor : 'red'}}>Submit</button><span className="underline"></span></div>
                                  </div>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
              <div className="footer-content" style={{paddingBottom : '1px', backgroundColor : '#000000'}}>
                  <div className="cvitae-container">
                  <blockquote style={{color : 'white', textAlign : 'center', padding : '40px 0px', fontSize : '40px'}}>The great leaders are like the best conductors - they reach beyond the notes to reach the magic in the players.
                    <small style={{color : 'red'}}> --  Blaine Lee</small>
                  </blockquote>
                    <ul className="links">
                        <li className="tooltipped" data-position="top" data-delay="50" data-tooltip="Email this Resume">
                            <a href="#"><span className="ti-email"></span>Email this Resume</a>
                        </li>
                        <li className="tooltipped" data-position="top" data-delay="50" data-tooltip="Goto Top">
                            <a href="#" data-hover="Goto Top" className="goto-top"><span className="ti-arrow-up"></span>Goto Top</a>
                        </li>
                        <li className="tooltipped" data-position="top" data-delay="50" data-tooltip="Follow on Twitter">
                            <a href="#"><span className="ti-twitter"></span>Twitter Profile</a>
                        </li>
                        <li className="tooltipped" data-position="top" data-delay="50" data-tooltip="Follow on Facebook">
                            <a href="#"><span className="ti-facebook"></span>Facebook Profile</a>
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