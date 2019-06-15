import React, {Component} from 'react'

export default class MainView extends Component {
  constructor(props) {
    super(props);
    this.mainViewRef = props.mainViewRef;
  }

  render() {
    return(
      <div className="MainView" ref={this.mainViewRef}>
        <img src={require("./Images/BlackPortfolio.png")} height="100.0%" width="100.0%" align="middle" style={{"position": "fixed"},{"top": "400px"}}/>
     </div>
    );
  }
}
