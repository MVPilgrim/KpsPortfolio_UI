import React, {Component} from 'react'
import ReactDOM, {DOMComponent} from 'react-dom'
import TopBar from './TopBar.js'
import Button from './Button.js'
import DDPopup from './DDPopup.js'

export default class DoistDemoPane extends Component {
  constructor(props) {
    super(props);
    this.handleInitButtonClick       = this.handleInitButtonClick.bind(this);
    this.chkForStartMsg              = this.chkForStartMsg.bind(this);
    this.handleAboutButtonClick      = this.handleAboutButtonClick.bind(this)
    this.handleDirectionsButtonClick = this.handleDirectionsButtonClick.bind(this)
    this.closeAbout                  = this.closeAbout.bind(this)
    this.returnAboutContent          = this.returnAboutContent.bind(this)

    this.state = {
      msgArray : [],
      ws : "",
      displayAbout : false
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
    var ws = "{\"cmd\": \"invoke services\", \"wsid\": \"" + wsid + "\"}";
    console.log("xhttp.send() ws: " + ws)
    xhttp.send(ws);
  }

  handleAboutButtonClick(event) {
    /* alert("handleAboutButtonClick() entered.") */
    this.setState({displayAbout: true})
  }
  closeAbout(event) {
    this.setState({displayAbout: false})
  }

  handleDirectionsButtonClick(event) {
    alert("handleDirectionsButtonClick() entered.")

  }

  returnAboutContent() {
    console.log("returnAboutContent() entered.")
    var retEle = '<div className="DDPopup">'
    retEle +=  '<h1 style={{"font-size": "4em"}}>DDPopupAbout</h1>'
    retEle +=  '<p/>'
    retEle += '</div>'

    console.log("returnAboutContent() retEle: " + retEle)
    return(retEle)
  }

  render() {

    return(
      <div>
        <TopBar className="DoistDemoTopBar"/>
        <Button label="Init Demo" style={{"width": "60px"}} handleClick={this.handleInitButtonClick}/>
        <Button label="Directions" style={{"left": "13.5%", "width": "60px"}} handleClick={this.handleDirectionsButtonClick}/>
        <Button label="About" style={{"left": "17.5%"}} handleClick={this.handleAboutButtonClick}/>
        <div className="DoistDemoHeading">Doist Demo UI</div>
        <DisplayMsg msgArray={this.state.msgArray}/>
        <DDPopup displayPopup={this.state.displayAbout} displayContent={this.returnAboutContent()} closeCallback={this.closeAbout}/>
     </div>
    );
  }
}


class DisplayMsg extends Component {
  constructor(props) {
    super(props);
    /* this.scrollToBottom = this.scrollToBottom.bind(this); */
  }

  /*
  componentDidUpdate () {
    console.log("DoistDemoPane.componentDidUpdate() entered.")
    this.scrollToBottom()
  }
  */

  /* Haven't found a good solution yet.
  scrollToBottom = () => {
    console.log("DoistDemoPane.scrollToBottom() entered.")

    const logContainer = ReactDOM.findDOMNode(this.logContainer);
    logContainer.scrollTop = logContainer.scrollHeight;

    console.log("DoistDemoPane.scrollToBottom() exited. logContainer.scrollTop= " + logContainer.scrollTop)
  }
  */

  render() {
    var retEle = (<p/>)
    if (this.props.msgArray.length > 0) {
      retEle = (
        <ul className="DisplayLog">
          {this.props.msgArray.map((item,index) => 
            <li key={index}>{item}</li>
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
