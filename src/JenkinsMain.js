import React, {Component} from 'react'
import ReactDom from 'react-dom'

import JenkinsPane from './JenkinsPane.js'
import BrowserWindow from './BrowserWindow.js'

export default class JenkinsMain extends Component {
  constructor(props) {
    super(props);

    this.thisRef = React.createRef();
    inputRef.current.getBoundingClientRect()
  }


  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener(this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.configThisWindow();
    this.configJenkinsWindow();
  }

  render() {
    return(
      <div>
        <div name="JenkinsPane" className="JenkinsPane">
          <JenkinsPane/>
        </div>
        <div>
          <BrowserWindow winUrl="https://kpsportfolio.info/jenkins" winName="Jenkins" parentRef={this.thisRef} parentOffsets="0" />
        </div>
     </div>
    );
  }
}
