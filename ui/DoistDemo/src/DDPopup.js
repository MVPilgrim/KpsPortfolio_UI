import React, {Component} from 'react'
import ReactDOM, {DOMComponent} from 'react-dom'

export default class DDPopup extends Component {
  constructor(props) {
    super(props)
    console.log("DDPopup entered.")
    this.closePopup = this.closePopup.bind(this)
  }

  closePopup() {
    this.props.closeCallback()
  }

    /*  <div style={{"left": "300px","top": "300px"}}> */

  render() {
    console.log("DDPopup render() entered.")
    const retEle = React.createElement
    retEle('div',null,'<p style="font-size": "4em">DDPopup</p>')
    if (this.props.displayPopup) {
      retEle('div',null,this.props.displayContent + '<span onClick={this.closePopup}>span CLOSEABOUT</span>')
      console.log("DDPopup retEle: " + retEle)
    }

    console.log("DDPopup render() before return.")
    return(
      <div>
<p style={{"font-size": "5em"}}>DDPopup returning.</p>
    const retEle = React.createElement
    retEle('div',null,'<p style={{"font-size": "4em"}}>retEle: DDPopup</p>')
      </div>
    );
  }
}
