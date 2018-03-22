import React ,{Component} from 'react'

const Skills = () => {
    return (
        <div id="skills" className="cvitae-section cvitae-skills">
          <div className="cvitae-container">
            <div className="cvitae-section-content">
              <div className="content-left">
                <h3 className="cvitae-section-title">Skills</h3>
                <ul className="hi-lights">
                  <li>Application Development</li>
                  <li>Service-Oriented Architecture</li>
                  <li>Enterprise Implementations </li>
                  <li>Software Development Lifecycle</li>
                </ul>
              </div>
              <div className="content-right">
                <div className="progress-bar-container">
                  <div className="progress">
                    <h3 className="progress-title">WordPress</h3>
                    <div className="progress-bar" data-progress="85">
                        <span className="bar"></span>
                        <span className="text">85</span>
                    </div>
                  </div>
                  <div className="progress">
                    <h3 className="progress-title">HTML / CSS</h3>
                    <div className="progress-bar" data-progress="72">
                        <span className="bar"></span>
                        <span className="text">72</span>
                    </div>
                  </div>
                  <div className="progress">
                    <h3 className="progress-title">JAVASCRIPT</h3>
                    <div className="progress-bar" data-progress="65">
                      <span className="bar"></span>
                      <span className="text">65</span>
                    </div>
                  </div>
                  <div className="progress">
                    <h3 className="progress-title">PHP7</h3>
                    <div className="progress-bar" data-progress="69">
                      <span className="bar"></span>
                      <span className="text">69</span>
                    </div>
                  </div>
                  <div className="progress">
                    <h3 className="progress-title">jQuery</h3>
                    <div className="progress-bar" data-progress="78">
                      <span className="bar"></span>
                      <span className="text">78</span>
                    </div>
                  </div>
                  <div className="progress">
                    <h3 className="progress-title">Laravel</h3>
                    <div className="progress-bar" data-progress="75">
                      <span className="bar"></span>
                      <span className="text">75</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Skills