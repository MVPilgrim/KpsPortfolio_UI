import React, {Component, PureComponent} from 'react';


export default class BrowserWindow extends React.Component {
  constructor(props) {
    super(props);

    this.thisRef = React.createRef();
    this.externalWindow = null;

    this.openBWin   = this.openBWin.bind(this);
    this.closeBWin  = this.closeBWin.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

    this.state = {
      winUrl:  props.winUrl,
      winName: props.winName,
      width:   0,
      height:  0,
      left:    0,
      top:     0
    };
  }

  componentDidMount() {
    this.externalWindow = this.openBWin();
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    window.addEventListener('move', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
    this.closeBWin();
  }

  configThisWindow() {
    this.setState({ jenkinsDemoWidth: window.innerWidth, jenkinsDemoHeight: window.innerHeight, jenkinsDemoLeft: window.inner });
  }
  configJenkinsWindow() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  openBWin() {
    var bWin = window.open(this.state.url,this.state.winName,this.state.windowSettings);
    return bWin;
  }
  closeBWin() {
    if (this.state.externalWindow != null) {
      this.state.externalWindow.close();
    }
  }

  render() {
    return null;
  }
}
