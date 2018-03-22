import React , {Component} from 'react'

const Footer = () => {
    return (
        
              <div id="contact" className="cvitae-section cvitae-contact footer">
                  <div className="cvitae-container">
                      <div className="cvitae-section-content">
                          <div className="content-left"><h3 className="cvitae-section-title">Contact Me</h3><p>Please feel fee to leave a message to me. I would love to hear from you anytime. Also you can call me or push me a message to my social networks. <br/>Thank you <br/>Regards -</p><img src="img/sign.png" alt="Signature"/></div>
                          <div className="content-right"><form method="post">
                              <div className="row">
                                  <div className="col s6">
                                      <div className="form-input"><input type="text" placeholder="your name*"/><span className="underline"></span></div>
                                  </div>
                                  <div className="col s6">
                                      <div className="form-input"><input type="text" placeholder="email*"/><span className="underline"></span></div>
                                  </div>
                              </div>
                              <div className="row">
                                  <div className="col s6">
                                      <div className="form-input"><input type="text" placeholder="phone*"/><span className="underline"></span></div>
                                  </div>
                                  <div className="col s6">
                                      <div className="form-input"><input type="text" placeholder="website"/><span className="underline"></span></div>
                                  </div>
                              </div>
                              <div className="row">
                                  <div className="col s12">
                                      <div className="form-textarea"><textarea placeholder="your message"></textarea><span className="underline"></span></div>
                                      <div className="form-submit"><button type="submit" className="waves-effect waves-cvitae">Submit</button><span className="underline"></span></div>
                                  </div>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
              <div className="footer-content">
                  <div className="cvitae-container">
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
                    <p className="copyright">Powered by <a href="" target="_blank" style={{color : 'red'}}>Altitude Technologies</a></p>
                   </div>
              </div>
          </div>
      
    )
}

export default Footer