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
              The Doist Demo illustrates using the integrations capabilities of the Doist products Todist and Twist
              along with a number of other technologies. Here is a list of the technologies.
              <ul>
                <li>Todoist integration with Twist</li>
                <li>Twist call to an external API</li>
                <li>Reactjs and JSX UI</li>
                <li>Javascript</li>
                <li>Websockets</li>
                <li>Amazon Web Services</li>
                  <ul>
                    <li>EC2</li>
                    <li>VPC</li>
                    <li>Elastic IP</li>
                    <li>API Gateway</li>
                    <li>Lambda Function</li>
                  </ul>
                <li>nginx web server</li>
                <li>nodejs</li>
                <li>nwb package builder</li>
              </ul>
            </p>
            <p>
              Here is the processing sequence for the demo.
              <ul>
                <li>The user clicks "Init Demo".</li>
                <li>The user creates a task from the text displayed in the popup.</li>
                <li>Todoist sends a "Task added" message to Twist.</li>
                <li>Twist forwards the message using the configured external URL.</li>
                <li>The node TwistToWs.js component receives the start messaged and forwards it to the browser via Web Sockets.</li>
                <li>Javascript running in the browser receives the Web socket message and displays it to the log screen..</li>
                <li>Since the message is "start demo", the Javascript code calls the AWS Lambda Function.</li>
                <li>The Lambda function sends "start" and then "end" messages to Twist via a Twist integration API.</li>
                <li>Twist sends the messages from the Lambda function to TwistToWs.</li>
                <li>TwistToWs forwards the messages to the browser via the Web Socket.</li>
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
