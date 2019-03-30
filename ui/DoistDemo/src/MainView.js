import React, {Component} from 'react'

export default class MainView extends Component {
  constructor(props) {
    super(props);
    this.mainViewRef = props.mainViewRef;
  }

  render() {
    return(
      <div className="MainView" ref={this.mainViewRef}>
        <img src={require("./Images/KpsPortfolio.svg")} height={"100%"} width={"100%"}/>
     </div>
    );
  }
}
