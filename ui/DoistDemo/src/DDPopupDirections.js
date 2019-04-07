import React, {Component} from 'react'
import ReactDOM, {DOMComponent} from 'react-dom'

export default class DDPopupDirections extends Component {
  constructor(props) {
    super(props)
    console.log("DDPopup entered.")
    this.closePopup = this.closePopup.bind(this)
  }

  closePopup() {
    this.props.closeCallback()
  }

  render() {
    var retEle = (
      <p/>
    )
    if (this.props.displayPopup) {
      retEle = (
        <div className="DDPopup">
          <i className="far fa-window-close" style={{"float": "right","font-size": "25px","margin": "5px 10px 0 0","color": "#555555"}} onClick={this.closePopup}></i>
          <h1>Directions to Run Doist Demo</h1>
          <div className="PopupTextBody">
            <p>
              Here are the steps to run the Doist Demo.
            </p>
            <ul>
              <li>In the Todoist frame, open the "RunDoistDemo" project.</li>
              <li>In Twist, click the "DoistDemo" channel and "KpsPortfolio" thread to display messages.</li>
              <li>Click Init Demo.</li>
              <li>Copy the text from the popup.</li>
              <li>Add a task with the copied text from the popup.</li>
              <li>Watch the messages appear in Twist.</li>
              <li>Watch the messages appear in the message log.</li>
            </ul>
          </div>
        </div>
      );
    }

    return(
      <div>
        {retEle}
      </div>
    );
  }
}
