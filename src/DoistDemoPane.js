import React, {Component}       from 'react'
import ReactDOM, {DOMComponent} from 'react-dom'

import TopBar            from './TopBar.js'
import ButtonDoistDemo   from './ButtonDoistDemo.js'
import DDPopupAbout      from './DDPopupAbout.js'
import DDPopupInitDemo   from './DDPopupInitDemo.js'
import DDPopupDirections from './DDPopupDirections.js'
import DDPopupDevStatus  from './DDPopupDevStatus.js'

export default class DoistDemoPane extends Component {
  constructor(props) {
    super(props);
    this.handleInitButtonClick       = this.handleInitButtonClick.bind(this);
    this.chkForStartMsg              = this.chkForStartMsg.bind(this);
    this.handleAboutButtonClick      = this.handleAboutButtonClick.bind(this)
    this.handleDirectionsButtonClick = this.handleDirectionsButtonClick.bind(this)
    this.handleClearLogButtonClick   = this.handleClearLogButtonClick.bind(this)
    this.handleDevStatusButtonClick  = this.handleDevStatusButtonClick.bind(this)
    this.closeAbout                  = this.closeAbout.bind(this)
    this.closeDirections             = this.closeDirections.bind(this)
    this.closeInitDemo               = this.closeInitDemo.bind(this)
    this.closeDevStatus              = this.closeDevStatus.bind(this)

    this.state = {
      msgArray : [],
      ws : "",
      displayAbout          : false,
      displayDirections     : false,
      displayInitDemo       : false,
      initDemoCommandString : ""
    }
  }

  handleInitButtonClick(event) {
    var wsid=Math.random() + ""
    var result = wsid.match(/..(.*)/)
    wsid = result[1]
    console.log('Start Doist Demo wsid="' + wsid + '"')

    //const url = 'wss://52.86.107.14:10001?wsid="' + wsid + '"'
    const url = 'wss://kpsportfolio.info:10001?wsid="' + wsid + '"'
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
      //var rawMsg = decodeURIComponent("%E2%9E%95" + e.data)
      var rawMsg = decodeURIComponent("%E2%9A%AB" + e.data)
      rawMsg = rawMsg.replace(/[+]/g," ")

      var formattedMsg = this.formatMsg(rawMsg)
      formattedMsg[0] = formattedMsg[0].replace(/\[/g," ")
      tmpArray.push(formattedMsg[0])
      tmpArray.push(formattedMsg[1])

      this.setState({msgArray: tmpArray})
      var rc = this.chkForStartMsg(rawMsg)
      if (rc) {
        this.invokeLambdaFunction(wsid)
      }
    }
    this.setState({ws: ws})
    //alert('Task: ' + 'cmd="start DoistDemo"' + ' wsid="' + wsid + '"')
    var wcmd = 'cmd="start DoistDemo"' + ' wsid="' + wsid + '"'
    this.setState({initDemoCommandString: wcmd})
    this.setState({displayInitDemo: true})
  }

  formatMsg(msg) {
    var ind = msg.indexOf(" ")
    console.log("### ind: " + ind)
    var timeStamp = msg.slice(0,ind)
    console.log("### timeStamp: " + timeStamp)
    msg = msg.slice(ind+1)
    var cmdAndWsid = msg.match(/content=.*"]/)
    console.log("cmdAndWsid 1: " + cmdAndWsid)
    if (cmdAndWsid == null || cmdAndWsid == "") {
      cmdAndWsid = msg.match(/content=.*",/)
    }
    console.log("cmdAndWsid 2: " + cmdAndWsid)
    cmdAndWsid = cmdAndWsid[0]
    cmdAndWsid = cmdAndWsid.substring(8,cmdAndWsid.length-1)
    console.log("### cmdAndWsid: " + cmdAndWsid)
    var formattedMsg1 = timeStamp + ": " + cmdAndWsid
    var formattedMsg2 = msg
    console.log("### formattedMsg1: " + formattedMsg1)
    console.log("### formattedMsg2: " + formattedMsg2)
    var formattedMsg = [formattedMsg1,formattedMsg2]
    return formattedMsg
  }

  closeWebsocket() {
    var ws = this.getState("ws")
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
    //xhttp.open("POST", "https://api.kpsportfolio.info/lambda/trigger", true);
    xhttp.open("POST", "https://kpsportfolio.info/lambda/trigger", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    var ws = "{\"cmd\": \"invoke services\", \"wsid\": \"" + wsid + "\"}";
    console.log("xhttp.send() ws: " + ws)
    xhttp.send(ws);
  }

  handleAboutButtonClick(event) {
    this.setState({displayAbout: true})
  }
  closeAbout(event) {
    this.setState({displayAbout: false})
  }

  handleDirectionsButtonClick(event) {
    this.setState({displayDirections: true})
  }
  closeDirections(event) {
    this.setState({displayDirections: false})
  }

  closeInitDemo(event) {
    this.setState({displayInitDemo: false})
  }

  handleClearLogButtonClick(event) {
    this.setState({msgArray: []})
  }

  handleDevStatusButtonClick(event) {
    this.setState({displayDevStatus: true})
  }
  closeDevStatus(event) {
    this.setState({displayDevStatus: false})
  }

  render() {
    return(
      <div>
        <TopBar className="DoistDemoTopBar displayHeading={true}"/>
        <ButtonDoistDemo label="Init Demo" style={{"width": "60px"}} handleClick={this.handleInitButtonClick}/>
        <ButtonDoistDemo label="Directions" style={{"left": "13.5%", "width": "60px"}} handleClick={this.handleDirectionsButtonClick}/>
        <ButtonDoistDemo label="Clear Log" style={{"left": "17.5%", "width": "60px"}} handleClick={this.handleClearLogButtonClick}/>
        <ButtonDoistDemo label="About" style={{"left": "21.5%"}} handleClick={this.handleAboutButtonClick}/>
        <ButtonDoistDemo label="Dev Status" style={{"left": "24.0%", "width": "70px"}} handleClick={this.handleDevStatusButtonClick}/>
        <div className="DoistDemoHeading">Doist Demo Message Log</div>
        <DisplayMsg msgArray={this.state.msgArray}/>
        <DDPopupAbout displayPopup={this.state.displayAbout} closeCallback={this.closeAbout}/>
        <DDPopupInitDemo displayPopup={this.state.displayInitDemo} closeCallback={this.closeInitDemo} initDemoCommandString={this.state.initDemoCommandString}/>
        <DDPopupDirections displayPopup={this.state.displayDirections} closeCallback={this.closeDirections}/>
        <DDPopupDevStatus displayPopup={this.state.displayDevStatus} closeCallback={this.closeDevStatus}/>
     </div>
    );
  }
}


class DisplayMsg extends Component {
  constructor(props) {
    super(props);
    /* this.scrollToBottom = this.scrollToBottom.bind(this); */
  }


  render() {
    var retEle = (<p/>)
    if (this.props.msgArray.length > 0) {
      retEle = (
        <ul className="DisplayLog">
          {this.props.msgArray.map((item,index) => 
            <div>{item}</div>
          )}
        </ul>
      )
    }

    return(
      <div ref={(el) => { this.logContainer = el; }}>
        {retEle}
      </div>
    );
  }
}
