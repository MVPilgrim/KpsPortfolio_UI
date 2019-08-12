import React, {Component} from 'react'
import ReactDOM, {DOMComponent} from 'react-dom'

export default class DDPopupDevStatus extends Component {
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
          <h1>Doist Demo Development Status</h1>
          <div className="PopupTextBody">
            <p>
              The current "release" of the demo is "MVD 0.0.1"; that is, Minimum Viable Demo 0.0.1.
            </p>
            <p>
              I'm planning to implement the following enhancements for MVD 0.0.2:
              <ul>
                <li>Add additional services/components which will to receive, annotate, and forward demo messages (a chain of components which will receive and process the message in sequence).
                    The Lambda Function will send the message to the first component on the list.
                    Implementing these services will add to the technologies already in use and so demonstrate a level of proficiency in them.
               </li>
               <li>Add a graphical display of messages flowing though the components. This should make is clearer about how the demo operages.</li>
              </ul>
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
