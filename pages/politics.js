import {Component} from 'react'
import Head from 'next/head'

import withLayout from '../components/withLayout'
import TopBanner from '../components/Header/TopBanner'
import Menu from '../components/Header/Menu'
import Navigation from '../components/Header/Navigation'
import About from '../components/About/About'
import Politics from '../components/Politics/Politics'
import Achievement from '../components/Achievement/Achievement'
import Footer from '../components/Footer/Footer'



class PoliticsPage extends Component{
  render(){
    return(
      <div className="cvitae-site-container" >

        <div className="cvitae-menu-wrapper">
            <nav className="cvitae-main-nav ">
                <ul>
                    <li className="waves-effect waves-cvitae"><a href="/#about">About</a></li>
                    <li className="waves-effect waves-cvitae"><a href="/#education">Education</a></li>
                    <li className="waves-effect waves-cvitae"><a href="/portfolio">Portfolio</a></li>
                    <li className="cvitae-home waves-effect"><a href="/">KTT <small>(SAN)</small></a></li>
                    <li className="waves-effect waves-cvitae scroll"><a href="#">Politics</a></li>
                    <li className="waves-effect waves-cvitae"><a href="/">Honours</a></li>
                    <li className="waves-effect waves-cvitae"><a href="/blog">Blog</a></li>
                    <li className="waves-effect waves-cvitae scroll"><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>

        <div id="portfolio" className="cvitae-section cvitae-portfolio">
            <div className="container-fluid">
                <img src="/static/img/politics/politics.jpg" width="100%" />
            </div>
        </div>

        <Politics />
        
        <Achievement />
        
        

        <Footer />
      </div>

        
    )
  }
}
  
export default withLayout(PoliticsPage)