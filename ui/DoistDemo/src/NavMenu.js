import React, {Component} from 'react'
import ReactDom from 'react-dom'

import TopBar from './TopBar.js'
import DoistDemoMain from './DoistDemoMain.js'

export default class NavMenu extends Component {
  constructor(props) {
    super(props);
    this.displayDoistDemo = this.displayDoistDemo.bind(this);
    this.mainViewRef = props.mainViewRef;
    this.reactDomRender = ReactDom.render;
    this.reactDomRender = this.reactDomRender.bind(this);
    this.targetContainer = document.getElementById('app');
  }

  displayDoistDemo(event) {
    this.reactDomRender (
      <div>
        <TopBar className="TopBar"/>
        <NavMenu/>
        <DoistDemoMain/>
      </div>,
      this.targetContainer
    );
  }

  render() {
    return(
      <div className="NavMenu">
        <div>&nbsp;</div>
        <div>&nbsp;<i className="far fa-folder">&nbsp;&nbsp;</i><a href="about.html">About</a></div>
        <div>&nbsp;</div>
        <div>&nbsp;<i className="far fa-folder">&nbsp;&nbsp;</i><a href="gospel.html">The Gospel</a></div>
        <div>&nbsp;</div>
        <div>&nbsp;<i className="far fa-folder">&nbsp;&nbsp;</i><a href="javascript:void(0)" onClick={this.displayDoistDemo}>Doist Demo</a></div>
        <div>&nbsp;</div>
        <div>&nbsp;<i className="far fa-folder">&nbsp;&nbsp;</i><a href="virtualSupport.html">Virtual Support</a></div>
        <div>&nbsp;</div>
        <div>&nbsp;<i className="far fa-folder">&nbsp;&nbsp;</i><a href="wiseEliza.html">Wise Eliza</a></div>
        <div>&nbsp;</div>
        <div>&nbsp;<i className="far fa-folder">&nbsp;&nbsp;</i><a href="childlikeHomepage.html">Childlike Homepage</a></div>
     </div>
    );
  }
}
