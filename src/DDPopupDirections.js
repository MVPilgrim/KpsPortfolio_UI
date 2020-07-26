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
        <div className="DDPopup" style={{"overflow": "scroll"}}>
          <i className="far fa-window-close" style={{"float": "right","font-size": "25px","margin": "5px 10px 0 0","color": "#555555"}} onClick={this.closePopup}></i>
          <h1>Directions to Run Doist Demo</h1>
          <div className="PopupTextBody">
            <p>
              Here are the steps to run the Doist Demo.
            </p>
            <ul>
              <li>Log in to todoist.com and then twist.com using your own id and password. If don't have an account, you can signup for one at each web site.</li>
              <li>Configure Todoist:</li>
                <ul>
                  <li>Create a project named "KpsPortfolio"</li>
                  <li>Under KpsPortfolio, create a sub-project named "DoistDemo"</li>
                </ul>
              <li>Configure Twist:</li>
                <ul>
                  <li>Create a channel named "KpsPortfolio".</li>
                  <li>Under KpsPortfolio, create a thread named "DoistDemo".</li>
                  <li>Create a Todoist integration.</li>
                    <ul>
                      <li>Click the elipsis, the three dots, to the right of the KpsPortfolio channel.</li>
                      <li>Click "Add integrations...".</li>
                      <li>Click "Browse".</li>
                      <li>Scroll down and click "Todoist".</li>
                      <li>For "Post to channel", select "KpsPortfolio".</li>
                      <li>And from the following thread: select "DoistDemo".</li>
                      <li>For "Who do you want to notify", select "Everyone in channel."</li>
                      <li>Click "Install Integration."</li>
                      <li>For "Which project", select "DoistDemo".</li>
                      <li>For "notification options", click "Notify when tasks are completed or uncompleted."</li>
                      <li>Click "Update Installation."</li>
                    </ul>
                  <li>Create the Twist-To-WebSockets adapter integration.</li>
                    <ul>
                      <li>Click the elipsis, the three dots, to the right of the KpsPortfolio channel.</li>
                      <li>Click "add integrations".</li>
                      <li>Click "Build".</li>
                      <li>Click "Add a new integration".</li>
                        <ul>
                          <li>Set "Integration Name:" to "SendMsgsToTwistToWsAdapter".</li>
                          <li>Set "Description:" to "Posts messages from Twist to the TwistToWsAdapter running in an EC2 instance."</li>
                          <li>Set "Integration type" to "Thread Updates integration".</li>
                          <li>Click "Create my integration".</li>
                        </ul>
                      <li>Webhooks</li>
                        <ul>
                          <li>Set "Outgoing webhook URL:" to "https://agw.kpsportfolio.info/doistdemo/triggerdoistdemo".</li>
                          <li>Click "Update URLs".</li>
                        </ul>
                      <li>Buffer and Schedule</li>
                        <ul>
                          <li>Set "Default buffering:" to "Port in realtime (buffering)".</li>
                        </ul>
                      <li>Installation</li>
                        <ul>
                          <li>For "Post to channel:" select "KpsPortfolio".</li>
                          <li>For "And in following thread:" select "DoistDemo".</li>
                          <li>For "Who do you want to notify:" select "Everyone in channel".</li>
                        </ul>
                      <li>Click "Install Integration".</li>
                    </ul>
                </ul>
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
