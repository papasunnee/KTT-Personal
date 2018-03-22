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

        <Menu />

        <div id="portfolio" className="cvitae-section cvitae-portfolio">
            <div className="container-fluid">
                <img src="./static/img/politics/politics.jpg" width="100%" />
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
