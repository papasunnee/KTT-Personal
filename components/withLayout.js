import React, {Component} from 'react'
import Head from 'next/head'
import { initGA, logPageView } from '../utils/analytics'

//import { Button, Fade } from 'reactstrap';

import Scripts from './Scripts/Scripts'

export default function withLayout(Child) {

  class WrappedComponent extends React.Component {
    constructor(props){
      super(props)
      this.state = { loading: true }

    }

    componentDidMount(){
      setTimeout(()=>this.setState({loading: false}), 2000)
      // console.log('mount');
      if (!window.GA_INITIALIZED) {
        initGA()
        window.GA_INITIALIZED = true
      }
      logPageView()
    }

    render() {
      return (
        <div>
              <Head>
              <title>KTT - Personal Website</title>
                <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta charSet="utf-8" />
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <link rel="shortcut icon" href="favicon.ico" />
                <link href='https://fonts.googleapis.com/css?family=Ubuntu:400,300,300italic,400italic,500,500italic,700,700italic' rel='stylesheet' type='text/css' />
                <link rel="stylesheet" type="text/css" href="./static/css/themify-icons.css" />
                <link rel="stylesheet" type="text/css" href="./static/css/catSlider.css" />
                <link rel="stylesheet" type="text/css" href="./static/css/owl.carousel.css" />
                <link rel="stylesheet" type="text/css" href="./static/css/materialize.min.css" />
                <link rel="stylesheet" type="text/css" href="./static/css/turakipersonal.css" />
                <link rel="stylesheet" type="text/css" href="./static/css/main.css" />
                <script type="text/javascript" src="./static/js/modernizr.js"></script>
              </Head>

              { this.state.loading &&
                <div className="preloader-overlay">
                  <div className="preloader">
                      <div className="lines">
                          <div className="line line-1"></div>
                          <div className="line line-2"></div>
                          <div className="line line-3"></div>
                      </div>
                      <div className="loading-text">LOADING</div>
                  </div>
                </div>
              }
              <Child {...this.props}/>
              <Scripts />

            {/* <Footer />*/}
        </div>
      )
    }
  }

  return (WrappedComponent)
}
