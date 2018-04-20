import {Component} from 'react'
import Head from 'next/head'

import withLayout from '../components/withLayout'
import TopBanner from '../components/Header/TopBanner'
import Menu from '../components/Header/Menu'
import MobileMenu from '../components/Header/MobileMenu'
import About from '../components/About/About'
import Achievement from '../components/Achievement/Achievement'
import Footer from '../components/Footer/Footer'



class HomePage extends Component{
  render(){
    return(
      <div className="turaki-site-container" >

        <TopBanner />

        <Menu isBottom/>

        <MobileMenu />

        <About />

        <Achievement />

        <Footer />
      </div>
    )
  }
}

export default withLayout(HomePage)
