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
              The current "release" of the demo is "MVD 01"; that is, Minimum Viable Demo 01.
            </p>
            <p>
              Here is the list of enhancement for MVD 02:
              <ul>
                <li>Add services to receive, annotate, and forward demo messages.</li>
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
