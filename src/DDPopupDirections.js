import React, {Component} from 'react'
import ReactDOM, {DOMComponent} from 'react-dom'

export default class DDPopupDirections extends Component {
  constructor(props) {
    super(props)
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
              <li>In a separate browser window, log in to Todoist.com and then Twist.com using the credentials below (same credentials for both) if you have not logged in already:</li>
                <ul>
                  <li>Id: kpsportfolio1@gmail.com</li>
                  <li>Password: DoistDemo</li>
                </ul>
              <li>Refresh the Doist Demo page so that the Doist and Twist pages will display correctly in their respective display panes..</li>
              <li>In the Twist pane on the bottom right of the screen, click the "DoistDemo" channel to display messages.</li>
              <li>In the Todoist pane directly above, click the three-line menu icon at the top left.</li>
              <li>Click the "RunDoistDemo" project.</li>
              <li>In the Doist Demo menu bar to the left, click Init Demo.</li>
              <li>Copy the text in the text box of the popup to the clipboard.</li>
              <li>Click the "X" at the top right corner to close the popup.</li>
              <li>In the Todoist pane, add a task with the copied text from the popup.</li>
              <li>Watch the messages appear in the Twist display.</li>
              <li>Watch the messages appear in the message log in the Doist Demo pane.</li>
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
