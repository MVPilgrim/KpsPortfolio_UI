import React, {Component} from 'react'

export default class MainView extends Component {
  constructor(props) {
    super(props);
    this.mainViewRef = props.mainViewRef;
  }

  render() {
    return(
      <div ref={this.mainViewRef}>
        <iframe name="MainView" className="MainView" src="src/MainView.html"/>
     </div>
    );
  }
}
