import React , {Component} from 'react'

export default class TopBanner extends Component {
  constructor(props){
    super(props)
    this.state = {isActive: false}
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({isActive: true})
    }, 1000)
  }

  render(){
    return(
        <div id="home" className={"cvitae-section slider sliderStyle8 " + (this.state.isActive? "active" : "")}>
            <div className="slider-overlay cvitae-typed-slider">
                <div className="cvitae-container">
                    <div className="slider-content">
                        <p className="name">Kabiru Tanimu Turaki</p>
                        <p className="designation">SENIOR ADVOCATE OF NIGERIA</p>
                    </div>
                </div>
            </div>
        </div>
      )
  }
}
//export default TopBanner
