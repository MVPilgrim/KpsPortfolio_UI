import React, {Component} from 'react'
import ReactDom from 'react-dom'

import DoistDemoPane from './DoistDemoPane.js'

export default class DoistDemoMain extends Component {
  render() {
    return(
      <div>
        <div name="DoistDemoPane" className="DoistDemoPane">
          <DoistDemoPane/>
        </div>
        <iframe name="Todoist" className="Todoist" src="https://todoist.com"/>
        <iframe name="Twist" className="Twist" src="https://twist.com"/>
     </div>
    );
  }
}
