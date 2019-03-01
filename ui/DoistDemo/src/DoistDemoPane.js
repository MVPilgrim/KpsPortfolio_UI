import React, {Component} from 'react'
import TopBar from './TopBar.js'
import Button from './Button.js'

export default class DoistDemoPane extends Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.state = {
      msgArray : ["empty"],
      ws : ""
    }
  }

  handleButtonClick(event) {
    var wsid=Math.random()
    console.log('Start Doist Demo wsid="' + wsid + '"')

    const url = 'ws://52.86.107.14:10001?wsid="' + wsid + '"'
    console.log("Before new WebSocket")
    //const ws = new WebSocket(url)
    var ws = new WebSocket(url)
    //const ws = new WebSocket(url, {
      //perMessageDeflate: false
    //});

    ws.onclose = ""

    ws.onopen = () => {
      console.log("Before onopen")
    }

    ws.onerror = (error) => {
      console.log("Before onerror")
      console.log(`WebSocket error: ${error}`)
    }

    ws.onmessage = (e) => {
      console.log("Before onmessage")
      console.log(e.data)
      var tmpArray = this.state.msgArray
      tmpArray.push(e.data)
      this.setState({msgArray: tmpArray})
      //displayMsg(e.data)
      //chkForStartMsg(e.data)
    }
    this.setState({ws: ws})
    alert("Copy to Todoist task: Start Doist Demo wsid=" + wsid)
  }


  closeWebsocket() {
    ws = this.getState("ws")
    ws.onclose = function () {}; // disable onclose handler first
    ws.close();
  }
   
  render() {
    return(
      <div>
        <TopBar className="DoistDemoTopBar"/>
        <h1>Doist Demo UI</h1>
        <Button label="Init Demo" handleClick={this.handleButtonClick}/>
        <DisplayMsg msgArray={this.state.msgArray}/>
     </div>
    );
  }
}


class DisplayMsg extends Component {
  render() {
    return(
      <ul>
        {this.props.msgArray.map((item,index) => 
          <li key={index}>{item}</li>
        )}
      </ul>
    );
  }
}
