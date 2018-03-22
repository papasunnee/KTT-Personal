import {Component} from 'react'
import Head from 'next/head'

import withLayout from '../components/withLayout'
import Menu from '../components/Header/Menu'
import Achievement from '../components/Achievement/Achievement'
import Education from '../components/Education/Education'
import Footer from '../components/Footer/Footer'



class EducationPage extends Component{
  render(){
    return(
      <div className="cvitae-site-container" >

        <Menu/>

        <div id="portfolio" className="cvitae-section cvitae-portfolio">
            <div className="container-fluid">
                <img src="./static/img/education/education.jpg" style={{marginTop: "-150px"}} width="100%" />
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
