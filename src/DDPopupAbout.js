import React, {Component} from 'react'
import ReactDOM, {DOMComponent} from 'react-dom'

export default class DDPopupAbout extends Component {
  constructor(props) {
    super(props)
    this.closePopup = this.closePopup.bind(this)
  }

  closePopup() {
    this.props.closeCallback()
  }

  render() {
    console.log("DDPopup render() entered.")
    var retEle = (
      <p/>
    )
    if (this.props.displayPopup) {
      retEle = (
        <div className="DDPopup"  style={{"overflow": "scroll"}}>
          <i className="far fa-window-close" style={{"float": "right","font-size": "25px","margin": "5px 10px 0 0","color": "#555555"}} onClick={this.closePopup}></i>
          <h1>About Doist Demo</h1>
          <div className="PopupTextBody">
            <p>
              The Doist Demo illustrates using the integration capabilities of the Doist products Todist and Twist with code I've written.
            </p>
            <p>
              Here is the processing sequence for the demo.
              <ul>
                <li>The user clicks "Init Demo".</li>
                <li>The user creates a Todoist task from the text displayed in the popup (for example, cmd="start DoistDemo" wsid="8728631284717989").</li>
                <li>Todoist sends a "Task added" message to Twist.</li>
                <li>Twist forwards the message using the configured external URL.</li>
                <li>The nodejs TwistToWs.js component receives the message from Twist and forwards it to the browser via a Web Sockets connection.</li>
                <li>Javascript running in the browser receives the Web Sockets message and displays it to the log screen..</li>
                <li>Since the message is "start demo", the Javascript code calls the AWS Lambda Function.</li>
                <li>The Lambda function sends "start" and then "end" messages to Twist via the Twist integration API.</li>
                <li>Twist sends the messages from the Lambda function to TwistToWs.js.</li>
                <li>TwistToWs.js forwards the messages to the browser via the Web Socket.</li>
                <li>Javascript in the browser displays the messages in the message log UI pane.</li>
              </ul>
            </p>
            <p>
            </p>
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
