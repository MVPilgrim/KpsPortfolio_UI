import React, {Component} from 'react'

export default class DoistDemo extends Component {
  render() {
    return(
      <div>
        <iframe name="DoistDemo" className="DoistDemo" src="src/DoistDemo.html"/>
        <iframe name="Todoist" className="Todoist" src="https://todoist.com"/>
        <iframe name="Twist" className="Twist" src="https://twist.com"/>
     </div>
    );
  }
}
