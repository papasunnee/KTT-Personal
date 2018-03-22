import {Component} from 'react'
import Head from 'next/head'

import withLayout from '../components/withLayout'
import TopBanner from '../components/Header/TopBanner'
import Menu from '../components/Header/Menu'
import Navigation from '../components/Header/Navigation'
import About from '../components/About/About'
import Education from '../components/Education/Education'
import Achievement from '../components/Achievement/Achievement'
import Footer from '../components/Footer/Footer'



class HomePage extends Component{
  render(){
    return(
      <div className="cvitae-site-container" >

        <TopBanner />

        <Menu isBottom/>

        {/* <Navigation /> */}

        <About />

        <Education />

        <Achievement />

        <Footer />
      </div>
    )
  }
}

export default withLayout(HomePage)
