import React, {Component} from 'react';
import ReactDom from 'react-dom';
//import { DefaultPlayer as Video } from 'react-html5video';
//import 'react-html5video/dist/styles.css';

import TopBar         from './TopBar.js'
import DoistDemoMain  from './DoistDemoMain.js';
import SpotOfJavaMain from './SpotOfJavaMain.js';

var dummyForceUpdate = 0;

export default class NavMenu extends Component {
  constructor(props) {
    super(props);
    this.displayAbout             = this.displayAbout.bind(this);
    this.displayGospel            = this.displayGospel.bind(this);
    this.displaySpotOfJavaDemo    = this.displaySpotOfJavaDemo.bind(this);
    this.displayDoistDemo         = this.displayDoistDemo.bind(this);
    this.displayVirtualSupport    = this.displayVirtualSupport.bind(this);
    this.displayChildlikeHomepage = this.displayChildlikeHomepage.bind(this);
    this.displayJenkinsDemo       = this.displayJenkinsDemo.bind(this);

    this.mainViewRef     = props.mainViewRef;
    this.reactDomRender  = ReactDom.render;
    this.reactDomRender  = this.reactDomRender.bind(this);
    this.targetContainer = document.getElementById('root');

    this.state = {
      displayClhpSun        : false,
      displayClhpClouds     : false,
      displayClhpHouse      : false,
      displayClhpFlowers    : false,
      displayClhpGrass      : false
    }
  }

  displayAbout(event) {
    this.reactDomRender (
      <div>
        <TopBar className="TopBar" displayHeading={true}/>
        <NavMenu/>
        <div className="MainView" style={{"overflow": "scroll"}}>
          <h1 className="PageHeading">About KPS Portfolio</h1>
          <img className="KpsPhoto" src={require("./Images/KpsButler.png")}/>
          <p className="TextBody">
            Hello!  My name is Kevin and I'll be your server today. I realize that I'm dressed like the butler, Jeeves,
            but it emphasizes the goal to be of service.
          </p>
          <p className="TextBody">
            May I begin by suggesting a non-alcoholic apertif (a contradiction in terms, I know) which is Living Water? There is nothing else like it.
            For the main course, I recommend a hearty portion of software technology - our Doist Demo. I think you'll find it quite satisfying.
            For dessert, I suggest one of the light, non-technical items such as the "Childlike Homepage". And, of course, please have that
            "Spot of Java" to round out the meal.
          </p>
          <br/><p className="TextBody">
            May I also tell you about our facilities and services?
            The design firm, ReactJSX, served as the architect and general contractor for our dining facility. Major subcontractors include CSS Inc.
            and the HTML 5 Agency.
          </p>
          <br/><p className="TextBody">
            In our kitchen, we use Github as our pantry to store ingredients for our software dishes.
            Feel free to take a peek at <a className="MiscLink"
              href="javascript:window.open('https://github.com/MVPilgrim?tab=repositories',
              'Github',
              'width=1200,height=800,resizable=yes,location=yes,menubar=yes,scrollbars=yes,status=yes,titlebar=yes')"
              >KpsPortfolio Pantry.</a>
        </p>
          <br/><p className="TextBody">
            Appliances are provided by the Always Waiting to Serve Corporation. We use our AWS EC2 oven and cooktops to prepare our dishes to perfection.
            Our unique Condiment assembly Line Interface directs the use of counter tops, mixers, bowls and utensils to complete each meal.
          </p>
          <br/><div className="TextBody">
            Our AWS Gateway enables by-directional communication between servers on the floor and the manager and chef.
            It reminds me of the doors to the kitchen which can swing inward and outward as people enter and exit. We want
            to make sure orders and any other requests from our customers are accurate and secure.
          </div>
          <br/><div className="TextBody">
            For childrens' enjoyment, we have a coloring booklet called "Mary Had A Little Lambda". This keeps them engaged while their
            meal is being prepared.
          </div>
          <br/><div className="TextBody">
            For childrens' safety, we introduced a special mechanism called "Web for Sockets" to protect them from open electrial outlets.
            The outlets are covered with a thin, elastic webbing that keeps children from touching the metal in the socket. The webbing and the
            socket receptor work together to only allow current flow when an actual plug is inserted. Should a child try and insert
            something else (paper clips, for example), current will not flow.
          </div>
          <br/><div className="TextBody">
            But I'm going on and on. Let me submit your order. Forgive me while I speak into my lapel.
            "A fountain, bits on a shingle, sweet baby nothing and Java from Java. x86 the mints."
          </div>
          <br/><p className="TextBody">
            Thanks so much for dining with us today!
          </p>
          <br/><div style={{"float": "left","marginLeft": "325px"}}>
            <img src={require("./Images/signature.png")} width="500px" height="83px"/>
          </div>
          <br/><br/><br/><br/><br/><br/><br/><br/>
          <div className="TextBody" style={{"float": "left","marginLeft": "350px"}}>
            P.S. Here is my E-mail address: <a className="MiscLink" href="mailto:mv.pilgrim.empl@gmail.com?Subject=KpsPortfolio%20Inquiry" target="_top">mv.pilgrim.empl@gmail.com</a>
          </div>
        </div>
      </div>
      ,this.targetContainer
    );
  }

  displayGospel(event) {
    this.reactDomRender (
      <div>
        <TopBar className="TopBar" displayHeading={true}/>
        <NavMenu/>
        <div className="MainView" style={{"overflow": "scroll"}}>
          <h1 className="PageHeading">The Gospel</h1>
          <p className="GospelPrayer">
            Putting your faith in Jesus Christ is absolutely the most important thing you can do.
            Please take a minute or two and read the Bible verse below in red to find out why. Hover over each line to see explanatory text.
          </p>
          <br/>
          <br/>
          <span style={{"color": "#505050", "fontSize": "3.0em", "textAlign": "center"}}>John 3:16</span>
          <br/>
          <div className="GospelText">
            <span gospel-tooltip="God was, is, and will always be. He created all things including you.">For God</span><br/>
            <span gospel-tooltip="His whole creation, all its people and you.">loved the world so much</span><br/>
            <span gospel-tooltip="God gave his most precious Treasure for you.">that he gave his one and only Son</span><br/>
            <span gospel-tooltip="That he is the Son of God, Savior and Lord. That he died on the cross for your sins and rose from the dead.">so that everyone who believes in him</span><br/>
            <span gospel-tooltip="Be separated from God and punished in hell forever because of your sins.">will not perish</span><br/>
            <span gospel-tooltip="To know God and glorify and enjoy him forever both now and in heaven.">but have eternal life.</span><br/>
          </div>
          <div className="GospelEpilog">
            <p>
              Will you believe?
            </p>
          </div>
          <span style={{"color": "black", "fontSize": "1.5em", "textAlign": "center"}}>If you do, tell God, from your heart, something like this:</span><br/><br/>
          <div className="GospelPrayer">
            <div>
              "Lord, I need you. Please come into my life.
              Thank you for dying on the cross for my sins.
              I believe you did that and you rose from the dead.
              Because you are alive, I can live forever, too, in heaven with you.
              Please show me what's next."
              Amen.
            </div>
          </div>
          <br/>
          <div className="GospelResources">
            <div>
               Here are links to various resources to learn more about God, Jesus Christ,
               and the Bible.
              <ul style={{"marginTop": "-2px"}}>
                <li><a className="Gospel" href="javascript:window.open('http://www.gotquestions.org','jav','width=1200,height=800,resizable=yes')">gotquestions.org: </a>Hundreds of thousands questions answered about God, Jesus Christ, and the Bible.</li>
                <li><a className="Gospel" href="javascript:window.open('https://www.gotquestions.org/what-is-the-Bible.html','jav','width=1200,height=800,resizable=yes')">gotquestions.org: </a>What is the Bible?</li>
                <li><a className="Gospel" href="javascript:window.open('https://www.biblegateway.com','jav','width=1200,height=800,resizable=yes')">biblegateway.com: </a>Many Bible translations.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>,
      this.targetContainer
    );
  }

  displaySpotOfJavaDemo(event) {
    this.reactDomRender (
      <div>
        <TopBar className="TopBar" displayHeading={true}/>
        <NavMenu/>
        <SpotOfJavaMain/>
      </div>,
      this.targetContainer
    );
  }

  displayDoistDemo(event) {
    this.reactDomRender (
      <div>
        <TopBar className="TopBar" displayHeading={true}/>
        <NavMenu/>
        <DoistDemoMain/>
      </div>,
      this.targetContainer
    );
  }

  displayVirtualSupport(event) {
    this.reactDomRender (
      <div>
        <TopBar className="TopBar" displayHeading={true}/>
        <NavMenu/>
        <div className="MainView" style={{"overflow": "scroll"}}>
          <div style={{"content": "", "display": "table", "clear": "both"}}>
            <h1 className="PageHeading">Virtual Support</h1>
              <div style={{"float": "left", "width": "50%"}}>
                <p className="TextBodyColumn">
                  I made this video a number of years ago as an entry in a contest at a previous company. The point of the contest was to promote the creation of innovative ideas for product enhancements.
                  The product I worked on was called Connect:Direct aka Network DataMover.
                  Connect:Direct can transfer many types of files on many types of computer systems with application integration capabilities on
                  both the sending and receiving sides.
                </p><br/>
                <div className="TextBodyColumn">
                  My idea was to create a dedicated virtual support space for each Connect:Direct customer.
                  Support personnel and customer technicians could collaborate in this virtual space to solve problems customers might encounter with Connect:Direct.
                  The virtual space contains tools to:
                  <ul>
                    <li>View diagnostic information.</li>
                    <li>Access historical information about previous issues.</li>
                    <li>Display configuration diagrams of the customer's network and instances of Connect:Direct.</li>
                    <li>Simulate and visualize Connect:Direct execution using the events recorded in log files.</li>
                  </ul>
                </div>
                <p className="TextBodyColumn">
                  I used OpenSource software called OpenSimulator to create the virtual environment. This environment is similar to the virtual world called SecondLife.
                </p><br/>
                <div className="TextBodyColumn">
                  <span style={{"fontSize": "20px", "fontWeight": "bold", "color": "black"}}>Before watching</span> this video please try and look past the following
                  imperfections with the quality of the video. Please focus on the idea itself of using a virtual space to collaborate with customers to solve support issues.
                  <ul>
                    <li>It was my first time to use video and audio editing tools.</li>
                    <li>The avatars in OpenSim can't move their lips which distracts from the dialog.</li>
                    <li>I voiced the dialog myself using an audio editing tool to lower the frequency of my voice for one avatar
                        and to raise it for the other. Unfortunately, the voicing sounds a little silly.</li>
                    <li>Messages displayed by the Connect:Direct simulator are not readable.</li>
                    <li>The moving parts that simulate objects and data flow within Connect:Direct are hard to see.</li>
                  </ul>
                </div>
                <p className="TextBodyColumn">
                  But undaunted, I present the video to you anyway.
                </p>
                <p className="TextBodyColumn">
                  (BTW: you'll need an MP4 player.)
                </p>
              </div>
              <div style={{"float": "left", "width": "50%"}}>
                <video width="640" height="480" controls>
                  <source src={require("./Videos/VirtualSupport.mp4")}/>
                </video>
              </div>
          </div>
        </div>
      </div>,
      this.targetContainer
    );
  }

  displayChildlikeHomepage(event) {
    this.reactDomRender (
      <div>
        <TopBar className="TopBar" displayHeading={true}/>
        <NavMenu/>
        <div className="MainView" style={{"overflow": "scroll"}}>
          <div style={{"content": "", "display": "table", "clear": "both"}}>
            <h1 className="PageHeading">Childlike Homepage</h1>
            <div style={{"float": "left", "width": "30%"}}>
              <p className="TextBodyColumn">
                In the mid-90's when the Web was spinning up,
                I saw a delightful home page. I don't remember the author or I would certainly give him credit.
                But I remember the major elements and have tried to reproduce them here.
              </p>
            </div>
            <div style={{"float": "left", "width": "70%"}}>
              <img src={require("./Images/ChildlikeHomepage.png")} width="958px" height="638px" style={{"borderStyle": "solid", "borderWidth": "3px", "borderColor": "dark gray"}} useMap="#clhpmap"/>
              <div>
                <map name="clhpmap">
                  <span clhp-tooltip="Children's pictures always need a sun."><area shape="rect" coords="0,0,286,213" href="javascript:void(0)" alt="Sun"/></span>
                  <span clhp-tooltip="And clouds go with the sun."><area shape="rect" coords="333,33,698,333" href="https://www.google.com" alt="House"/></span>
                  <span clhp-tooltip="A home for the homepage."><area shape="rect" coords="732,100,931,399" href="https://www.google.com" alt="House"/></span>
                  <span clhp-tooltip="Must have flowers."><area shape="rect" coords="599,333,732,399" href="https://www.google.com" alt="House"/></span>
                  <span clhp-tooltip="24 is good age."><area shape="rect" coords="732,499,931,572" href="https://www.google.com" alt="Signature"/></span>
                  <span clhp-tooltip="Lots of good, green grass."><area shape="rect" coords="333,432,665,605" href="https://www.google.com" alt="Signature"/></span>
                </map>
              </div>
            </div>
          </div>
        </div>
      </div>,
      this.targetContainer
    );
  }

    displayJenkinsDemo(event) {
      this.reactDomRender (
        <div>
          <TopBar className="TopBar" displayHeading={true}/>
          <NavMenu/>

        </div>,
        this.targetContainer
      );
    }

  render() {
    return(
      <div className="NavMenu">
        <div>&nbsp;</div>
        <div>&nbsp;<i className="far fa-folder" style={{"color": "#ffffff"}}>&nbsp;&nbsp;</i><a style={{"color": "#ffffff"}} href="index.html">Home</a></div>

        <div>&nbsp;</div>
        <div>&nbsp;<i className="far fa-folder" style={{"color": "#ffffff"}}>&nbsp;&nbsp;</i><a href="javascript:void(0)" onClick={this.displayAbout}>About</a></div>
        <div>&nbsp;</div>
        <div>&nbsp;<i className="far fa-folder" style={{"color": "#ffffff"}}>&nbsp;&nbsp;</i><a href="javascript:void(0)" onClick={this.displayGospel}>The&nbsp;Gospel</a></div>
        <div>&nbsp;</div>
        <div>&nbsp;<i className="far fa-folder" style={{"color": "#ffffff"}}>&nbsp;&nbsp;</i><a href="javascript:void(0)" onClick={this.displaySpotOfJavaDemo}>Spot-Of-Java&nbsp;Demo</a></div>
        <div>&nbsp;</div>
        <div>&nbsp;<i className="far fa-folder" style={{"color": "#ffffff"}}>&nbsp;&nbsp;</i><a href="javascript:void(0)" onClick={this.displayDoistDemo}>Doist&nbsp;Demo</a></div>
        <div>&nbsp;</div>
        <div>&nbsp;<i className="far fa-folder" style={{"color": "#ffffff"}}>&nbsp;&nbsp;</i><a href="javascript:void(0)" onClick={this.displayVirtualSupport}>Virtual&nbsp;Support</a></div>
        <div>&nbsp;</div>
        <div>&nbsp;<i className="far fa-folder" style={{"color": "#ffffff"}}>&nbsp;&nbsp;</i><a href="javascript:void(0)" onClick={this.displayChildlikeHomepage}>Childlike&nbsp;Homepage</a></div>
        <div>&nbsp;</div>
        <div>&nbsp;<i className="far fa-folder" style={{"color": "#ffffff"}}>&nbsp;&nbsp;</i><a href="javascript:void(0)" onClick={this.displayJenkinsDemo}>Jenkins&nbsp;Demo</a></div>
     </div>
    );
  }
}
