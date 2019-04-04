import React, {Component} from 'react'
import ReactDOM, {DOMComponent} from 'react-dom'

export default class DDPopupAbout extends Component {
  constructor(props) {
    super(props)
    console.log("DDPopup entered.")
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
        <div className="DDPopup">
          <h1>About Doist Demo</h1>
          <div>
            <p>
              The Doist Demo illustrates the use of the Doist products Todist and Twist
              along with a number of other technologies.
            </p>
            <p>
              The demo starts with creating a task in Todoist that starts the demonstration.
              Todoist sends the task to Twist via a Todoist integration with Twist. Next,
              Twist calls an integration API to a component running in an AWS EC2 instance
              which forwards the message back to the browser.
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
