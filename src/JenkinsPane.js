import React, {Component}       from 'react'
import ReactDOM, {DOMComponent} from 'react-dom'

import TopBar            from './TopBar.js'
import ButtonJenkinsDemo   from './ButtonJenkinsDemo.js'
import DDPopupAbout      from './DDPopupAbout.js'
import DDPopupDirections from './DDPopupDirections.js'
import DDPopupDevStatus  from './DDPopupDevStatus.js'


export default class JenkinsPane extends Component {
  constructor(props) {
    super(props);
    this.handleAboutButtonClick      = this.handleAboutButtonClick.bind(this)
    this.handleDirectionsButtonClick = this.handleDirectionsButtonClick.bind(this)
    this.handleDevStatusButtonClick  = this.handleDevStatusButtonClick.bind(this)
    this.closeAbout                  = this.closeAbout.bind(this)
    this.closeDirections             = this.closeDirections.bind(this)
    this.closeDevStatus              = this.closeDevStatus.bind(this)
    this.clearAllButtonClicks        = this.clearAllButtonClicks.bind(this)

    this.state = {
      displayAbout          : false,
      displayDirections     : false
    }
  }

  handleAboutButtonClick(event) {
    this.clearAllButtonClicks()
    this.setState({displayAbout: true})
  }
  closeAbout(event) {
    this.setState({displayAbout: false})
  }

  handleDirectionsButtonClick(event) {
    this.clearAllButtonClicks()
    this.setState({displayDirections: true})
  }
  closeDirections(event) {
    this.setState({displayDirections: false})
  }

  handleDevStatusButtonClick(event) {
    this.clearAllButtonClicks()
    this.setState({displayDevStatus: true})
  }
  closeDevStatus(event) {
    this.setState({displayDevStatus: false})
  }

  clearAllButtonClicks(event) {
    this.setState({displayAbout: false})
    this.setState({displayDirections: false})
    this.setState({displayDevStatus: false})
  }

  render() {
    return(
      <div style={{"left": "10%"}}>
        <TopBar className="JenkinsDemoTopBar displayHeading={true}"/>
        <ButtonJenkinsDemo label="About" style={{"left": "0%"}} handleClick={this.handleAboutButtonClick}/>
        <ButtonJenkinsDemo label="Directions" style={{"left": "2%"}} handleClick={this.handleDirectionsButtonClick}/>
        <ButtonJenkinsDemo label="Dev Status" style={{"left": "11%", "width": "40px"}} handleClick={this.handleDevStatusButtonClick}/>
        <DDPopupAbout displayPopup={this.state.displayAbout} closeCallback={this.closeAbout}/>
        <DDPopupDirections displayPopup={this.state.displayDirections} closeCallback={this.closeDirections}/>
        <DDPopupDevStatus displayPopup={this.state.displayDevStatus} closeCallback={this.closeDevStatus}/>
     </div>
    );
  }
}
