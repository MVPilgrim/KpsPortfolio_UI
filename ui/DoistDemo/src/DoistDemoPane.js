import React, {Component} from 'react'
import TopBar from './TopBar.js'
import Button from './Button.js'

export default class DoistDemoPane extends Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(event) {
    var wsid=Math.random()
    console.log('Start Doist Demo wsid="' + wsid + '"')

    const url = 'ws://52.86.107.14:10001?wsid="' + wsid + '"'
    console.log("Before new WebSocket")
    const ws = new WebSocket(url)
    //const ws = new WebSocket(url, {
      //perMessageDeflate: false
    //});

    ws.onopen = () => {
      console.log("Before onopen")
      ws.send('hey')
    }

    ws.onerror = (error) => {
      console.log("Before onerror")
      console.log(`WebSocket error: ${error}`)
    }

    ws.onmessage = (e) => {
      console.log("Before onmessage")
      console.log(e.data)
    }
    alert("Copy to Todoist task: Start Doist Demo wsid=" + wsid)
  }

  closeWebsocket() {
    ws.onclose = function () {}; // disable onclose handler first
    ws.close();
  }
   
  render() {
    return(
      <div>
        <TopBar className="DoistDemoTopBar"/>
        <h1>Doist Demo UI</h1>
        <Button label="Init Demo" handleClick={this.handleButtonClick}/>
     </div>
    );
  }
}
