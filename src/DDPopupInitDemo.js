import React, {Component} from 'react'
import ReactDOM, {DOMComponent} from 'react-dom'

export default class DDPopupInitDemo extends Component {
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
          <h1>Init Doist Demo</h1>
          <div className="PopupTextBody">
            <p>
              Select and copy the text in the field below to the clipboard.
              Create a new task in Todoist with the copied text as the task subject.
            </p>
            <span className="InitDemoField">{this.props.initDemoCommandString}</span>
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
