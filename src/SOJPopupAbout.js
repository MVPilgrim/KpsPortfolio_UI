import React, {Component} from 'react'

export default class SOJPopupAbout extends Component {
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
        <div className="SOJPopup"  style={{"overflow": "scroll"}}>
          <i className="far fa-window-close" style={{"float": "right","fontSize": "25px","margin": "5px 10px 0 0","color": "#555555"}} onClick={this.closePopup}></i>
          <h1>About Spot-of-Java</h1>
          <div className="PopupTextBody">
            <p>
              At the moment, there is only one Spot-of-Java in my portfolio. However, I intend to add a number of "Spots-of-Java" with each one demonstrating aspects
              of Java that I've learned (yes, it does sound like "vaporware"). I hope you will find them interesting and useful if they are new to you.
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
