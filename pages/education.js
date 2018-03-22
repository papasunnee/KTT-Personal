import {Component} from 'react'
import Head from 'next/head'

import withLayout from '../components/withLayout'
import TopBanner from '../components/Header/TopBanner'
import Menu from '../components/Header/Menu'
import Navigation from '../components/Header/Navigation'
import About from '../components/About/About'
import Port from '../components/Portfolio/Portfolio'
import Achievement from '../components/Achievement/Achievement'
import Education from '../components/Education/Education'
import Footer from '../components/Footer/Footer'



class EducationPage extends Component{
  render(){
    return(
      <div className="cvitae-site-container" >

        <div className="cvitae-menu-wrapper">
            <nav className="cvitae-main-nav ">
                <ul>
                    <li className="waves-effect waves-cvitae"><a href="/#about">About</a></li>
                    <li className="waves-effect waves-cvitae"><a href="/education">Education</a></li>
                    <li className="waves-effect waves-cvitae"><a href="/profession">Profession</a></li>
                    <li className="cvitae-home waves-effect"><a href="/">KTT <small>(SAN)</small></a></li>
                    <li className="waves-effect waves-cvitae"><a href="/politics">Politics</a></li>
                    <li className="waves-effect waves-cvitae"><a href="/">Honours</a></li>
                    
                    <li className="waves-effect waves-cvitae scroll"><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>

        <div id="portfolio" className="cvitae-section cvitae-portfolio">
            <div className="container-fluid">
                <img src="/static/img/education/education.jpg" style={{marginTop: "-150px"}} width="100%" />
            </div>
        </div>

        <Education />
        
        <Achievement />

        <Footer />
      </div>

        
    )
  }
}
  
export default withLayout(EducationPage)