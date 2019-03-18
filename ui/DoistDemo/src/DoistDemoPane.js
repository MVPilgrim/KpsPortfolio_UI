import React, {Component} from 'react'
import TopBar from './TopBar.js'
import Button from './Button.js'

export default class DoistDemoPane extends Component {
  constructor(props) {
    super(props);
    this.handleInitButtonClick = this.handleInitButtonClick.bind(this);
    this.chkForStartMsg = this.chkForStartMsg.bind(this);
    this.state = {
      msgArray : ["empty"],
      ws : ""
    }
  }

  handleInitButtonClick(event) {
    var wsid=Math.random() + ""
    var result = wsid.match(/..(.*)/)
    wsid = result[1]
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
      var wrks = decodeURIComponent(e.data)
      wrks = wrks.replace(/[+]/g," ")
      tmpArray.push(wrks)
      console.log("wrks decode: " + wrks)
      this.setState({msgArray: tmpArray})
      var rc = this.chkForStartMsg(wrks)
      if (rc) {
        this.invokeLambdaFunction(wsid)
      }
    }
    this.setState({ws: ws})
    alert('Task: ' + 'cmd="start DoistDemo"' + ' wsid="' + wsid + '"')
  }

  closeWebsocket() {
    ws = this.getState("ws")
    ws.onclose = function () {}; // disable onclose handler first
    ws.close();
  }

  chkForStartMsg(data) {
    var rc = false
    var result = data.match(/cmd=\"(..*)\" /)
    console.log("chkForStartMsg() entered. result=" + result)
    if (result !== null && result[1] == "start DoistDemo") {
      rc = true
    }
    return rc
  }
  
  invokeLambdaFunction(wsid) {
    console.log("invokeLambdaFunction() entered. wsid=" + wsid)

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      console.log("invokeLambdaFunction().onreadystatechange() entered. readyState,status,responseText: " + this.readyState + "," + this.status + "," + this.responseText)
    }
    xhttp.open("POST", "http://kpsportfolio.info/lambda/trigger", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    var ws = "{\"cmd\": \"invoke services\", \"wsid\": " + wsid + "}";
    console.log("xhttp.send() ws: " + ws)
    xhttp.send(ws);
  }

  handleAboutButtonClick(event) {
    alert("handleAboutButtonClick() entered.")
  }

  handleDirectionsButtonClick(event) {
    alert("handleDirectionsButtonClick() entered.")

  }

  render() {
    return(
      <div>
        <TopBar className="DoistDemoTopBar"/>
        <h1 className="PageHeading">Doist Demo UI</h1>
        <Button label="About" handleClick={this.handleAboutButtonClick}/>
        <Button label="Init Demo" style={{"left": "190px", "width": "55px"}} handleClick={this.handleInitButtonClick}/>
        <Button label="Directions" style={{"left": "253px", "width": "55px"}} handleClick={this.handleDirectionsButtonClick}/>
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
