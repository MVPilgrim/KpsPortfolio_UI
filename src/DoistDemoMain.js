import React, {Component} from 'react'
import ReactDom from 'react-dom'

import DoistDemoPane from './DoistDemoPane.js'
import BrowserWindow from './BrowserWindow.js'

export default class DoistDemoMain extends Component {
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
    this.configTodoistWindow();
    this.configTwistWindow();
  }

  render() {
    return(
      <div>
        <div name="DoistDemoPane" className="DoistDemoPane">
          <DoistDemoPane/>
        </div>
        <div>
          <BrowserWindow winUrl="https://todoist.com" winName="Todoist" parentRef={this.thisRef} parentOffsets="0" />
          <BrowserWindow winUrl="https://twist.com"   winName="Twist" />
        </div>
     </div>
    );
  }
}
