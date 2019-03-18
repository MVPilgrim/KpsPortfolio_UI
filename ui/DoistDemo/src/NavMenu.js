import React, {Component} from 'react'
import ReactDom from 'react-dom'

import TopBar from './TopBar.js'
import DoistDemoMain from './DoistDemoMain.js'

export default class NavMenu extends Component {
  constructor(props) {
    super(props);
    this.displayAbout             = this.displayAbout.bind(this);
    this.displayGospel            = this.displayGospel.bind(this);
    this.displayVirtualSupport    = this.displayVirtualSupport.bind(this);
    this.displayDoistDemo         = this.displayDoistDemo.bind(this);
    this.displayWiseEliza         = this.displayWiseEliza.bind(this);
    this.displayChildlikeHomepage = this.displayChildlikeHomepage.bind(this);

    this.mainViewRef     = props.mainViewRef;
    this.reactDomRender  = ReactDom.render;
    this.reactDomRender  = this.reactDomRender.bind(this);
    this.targetContainer = document.getElementById('app');
  }

  displayAbout(event) {
    this.reactDomRender (
      <div>
        <TopBar className="TopBar"/>
        <NavMenu/>
        <div className="MainView">
          <h1>About KpsPortfolio</h1>
        </div>
      </div>,
      this.targetContainer
    );
  }

  displayGospel(event) {
    this.reactDomRender (
      <div>
        <TopBar className="TopBar"/>
        <NavMenu/>
        <div className="MainView">
          <h1>The Gospel</h1>
        </div>
      </div>,
      this.targetContainer
    );
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

  displayVirtualSupport(event) {
    this.reactDomRender (
      <div>
        <TopBar className="TopBar"/>
        <NavMenu/>
        <div className="MainView">
          <h1>Virtual Support</h1>
        </div>
      </div>,
      this.targetContainer
    );
  }

  displayWiseEliza(event) {
    this.reactDomRender (
      <div>
        <TopBar className="TopBar"/>
        <NavMenu/>
        <div className="MainView">
          <h1>Wise Eliza</h1>
        </div>
      </div>,
      this.targetContainer
    );
  }

  displayChildlikeHomepage(event) {
    this.reactDomRender (
      <div>
        <TopBar className="TopBar"/>
        <NavMenu/>
        <div className="MainView">
          <h1>Childlike Homepage</h1>
        </div>
      </div>,
      this.targetContainer
    );
  }

  render() {
    return(
      <div className="NavMenu">
        <div>&nbsp;</div>
        <div>&nbsp;<i className="far fa-folder">&nbsp;&nbsp;</i><a href="javascript:void(0)" onClick={this.displayAbout}>About</a></div>
        <div>&nbsp;</div>
        <div>&nbsp;<i className="far fa-folder">&nbsp;&nbsp;</i><a href="javascript:void(0)" onClick={this.displayGospel}>The&nbsp;Gospel</a></div>
        <div>&nbsp;</div>
        <div>&nbsp;<i className="far fa-folder">&nbsp;&nbsp;</i><a href="javascript:void(0)" onClick={this.displayDoistDemo}>Doist&nbsp;Demo</a></div>
        <div>&nbsp;</div>
        <div>&nbsp;<i className="far fa-folder">&nbsp;&nbsp;</i><a href="javascript:void(0)" onClick={this.displayVirtualSupport}>Virtual&nbsp;Support</a></div>
        <div>&nbsp;</div>
        <div>&nbsp;<i className="far fa-folder">&nbsp;&nbsp;</i><a href="javascript:void(0)" onClick={this.displayWiseEliza}>Wise&nbsp;Eliza</a></div>
        <div>&nbsp;</div>
        <div>&nbsp;<i className="far fa-folder">&nbsp;&nbsp;</i><a href="javascript:void(0)" onClick={this.displayChildlikeHomepage}>Childlike&nbsp;Homepage</a></div>
     </div>
    );
  }
}
