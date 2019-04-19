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
              Here is the list of enhancements for MVD 02:
              <ul>
                <li>Add services to receive, annotate, and forward demo messages currently tranmitted through various components.
                    Implementing these services will add to the technologies already in use and so demonstrate a level of proficiency in them.
               </li>
               <li>Add a graphical display of messages flowing though the components.</li>
               <li>Ala Rube Goldberg, add a graphical display of messages flowing through the components.</li>
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
