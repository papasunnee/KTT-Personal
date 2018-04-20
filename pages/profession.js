import {Component} from 'react'
import Head from 'next/head'

import withLayout from '../components/withLayout'
import Menu from '../components/Header/Menu'
import MobileMenu from '../components/Header/MobileMenu'
import Port from '../components/Portfolio/Portfolio'
import Achievement from '../components/Achievement/Achievement'
import Footer from '../components/Footer/Footer'



class Portfolio extends Component{
  render(){
    return(
      <div className="turaki-site-container" >

        <Menu />

        <MobileMenu />

        <div id="portfolio" className="turaki-section turaki-portfolio">
            <div className="container-fluid">
                <img src="./static/img/portfolio/012.jpg" style={{marginTop: "-150px"}} width="100%" />
            </div>
        </div>

        <Port />

        <Achievement />

        <Footer />
      </div>


    )
  }
}

export default withLayout(Portfolio)
