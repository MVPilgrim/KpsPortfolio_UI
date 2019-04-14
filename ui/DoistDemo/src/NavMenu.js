import React, {Component} from 'react'
import ReactDom from 'react-dom'
//import { DefaultPlayer as Video } from 'react-html5video';
//import 'react-html5video/dist/styles.css';

import TopBar from './TopBar.js'
import DoistDemoMain from './DoistDemoMain.js'

export default class NavMenu extends Component {
  constructor(props) {
    super(props);
    this.displayAbout             = this.displayAbout.bind(this);
    this.displayGospel            = this.displayGospel.bind(this);
    this.displayVirtualSupport    = this.displayVirtualSupport.bind(this);
    this.displayDoistDemo         = this.displayDoistDemo.bind(this);
    this.displayWiseEliza         = this.displayWiseEliza.bind(this);
    this.displayChildlikeHomepage = this.displayChildlikeHomepage.bind(this);
    this.clhpSun                  = this.clhpSun.bind(this);

    this.mainViewRef     = props.mainViewRef;
    this.reactDomRender  = ReactDom.render;
    this.reactDomRender  = this.reactDomRender.bind(this);
    this.targetContainer = document.getElementById('app');
  }

  displayAbout(event) {
    this.reactDomRender (
      <div>
        <TopBar className="TopBar" displayHeading={true}/>
        <NavMenu/>
        <div className="MainView">
          <h1 className="PageHeading">About KPS Portfolio</h1>
          <img className="KpsPhoto" src={require("./Images/KpsButler.png")}/>
          <p className="TextBody">
            Welcome! My name is Kevin and I'll be your server today. May I suggest
                 many delightful software selections on the menu
                 serve up software
                     soupcon 
                     appetizer
                     vinagret salad
                     main course
                     sauteed mushrooms
                     succulent corn ...
                     dessert, apple tarts with whipped cream
                     
                     ajax, html, css, reaact, javascript, java,
                     
                     servers: web, VM, Linux
                     services: security, micro, network, OS
                     
                     
                     
                     
          </p>
          <br/>
          <p>
          </p>
          <br/>
          <p className="TextBody">
            Valet abilities like Solid Generalist.
            
            
            
            
            
            The focus of the portfolio is to present myself as a "Solid Generalist" in software development. I readily admit that I have not attained
            Guru status in a particular software technology. But I do believe that I can demonstrate useful proficiency in a number of technologies
            and an ability to learn new ones pretty quickly. In addition to the software projects contained in KpsPortfolio, there are a number
            of "artifacts" that I hope you find interesting. Through them, I want to give you an idea of the type of person I am.
          </p>
          <br/>
          <p className="TextBody">
            I hope you enjoy my work.
          </p>
          <p>
            <span style={{"font-family": "Trattatello, fantasy","font-size": "1em","float": "left","margin-left": "350px"}}>Kevin P. Stephenson</span>
          </p>
        </div>
      </div>,
      this.targetContainer
    );
  }

  displayGospel(event) {
    this.reactDomRender (
      <div>
        <TopBar className="TopBar" displayHeading={true}/>
        <NavMenu/>
        <div className="MainView" style={{"overflow": "scroll"}}>
          <h1 className="PageHeading">The Gospel</h1>
            <p className="TextBody">
              Putting your faith in Jesus Christ is absolutely the most important thing you can do.
              Please take a minute or two and read the Bible verse to find out why. Hover over each line to see explanatory text.
            </p>
            <br/>
            <br/>
            <span style={{"color": "#505050", "font-size": "3.0em", "text-align": "center"}}>John 3:16</span>
            <br/>
            <div className="GospelText">
              <span gospel-tooltip="God was, is, and will always be. He created all things including you.">For God</span><br/>
              <span gospel-tooltip="His whole creation, all its people and you.">loved the world so much</span><br/>
              <span gospel-tooltip="God gave his most precious Treasure for you.">that he gave his one and only Son</span><br/>
              <span gospel-tooltip="That he is the Son of God, Savior and Lord. That he died on the cross for your sins and rose from the dead.">so that everyone who believes in him</span><br/>
              <span gospel-tooltip="Be punished in hell forever because of your sins.">will not perish</span><br/>
              <span gospel-tooltip="To know God and glorify and enjoy him forever in heaven.">but have eternal life.</span><br/>
            </div>
            <div className="GospelEpilog">
              <p>
                Will you believe?
              </p>
            </div>
            <span style={{"color": "black", "font-size": "1.5em", "text-align": "center"}}>If you do, tell God, from your heart, something like this:</span><br/>
            <div className="GospelPrayer">
              <div style={{"margin": "0 2% 0 5%"}}>
                "Lord, I need you. Please come into my life.
                Thank you for dying on the cross for my sins.
                I believe you did that and that you rose from the dead.
                Because you are alive, I can live forever, too, in heaven with you.
                Please show me what's next."
                Amen.
              </div>
            </div>
            <br/>
            <div className="GospelResources">
              <div style={{"text-align": "left"}}>
                 Here are links to various resources to learn more about God, Jesus Christ,
                 and the Bible.
                <ul style={{"margin-top": "-2px"}}>
                  <li><a class="Gospel" href="http://www.gotquestions.org">gotquestions.org: </a>Hundreds of thousands questions answered about God, Jesus Christ, and the Bible.</li>
                  <li><a class="Gospel" href="https://www.gotquestions.org/what-is-the-Bible.html">gotquestions.org: </a> What is the Bible?</li>
                  <li><a class="Gospel" href="https://www.biblegateway.com">biblegateway.com: </a>Many Bible translations.</li>
                </ul>
              </div>
            </div>
        </div>
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
                  I made this video a number of years ago as an entry in a contest at a previous company to create innovative ideas for product enhancements.
                  The product I worked on was called Connect:Direct aka Network DataMover.
                  Connect:Direct can transfer many types of files on many types of computer systems with application integration capabilities on
                  both the sending and receiving sides.
                </p><br/>
                <p className="TextBodyColumn">
                  My idea was to create a dedicated virtual support space for each Connect:Direct customer.
                  Support personnel and customer technicians could collaborate in this virtual space to solve issues the customer encounters with Connect:Direct.
                  The space contains tools to:
                  <ul>
                    <li>View diagnostic information.</li>
                    <li>Access historical information about previous issues.</li>
                    <li>Display configuration diagrams of the customer's network and instances of Connect:Direct.</li>
                    <li>Provision C:D simulators to visualize C:D execution using the events recorded in log files (or Statistics Files as they are called).</li>
                  </ul>
                </p>
                <p className="TextBodyColumn">
                  I used OpenSource software called OpenSimulator for the virtual environment. It is patterned after the SecondLife virtual world.
                </p><br/>
                <p className="TextBodyColumn">
                  <span style={{"font-size": "20px", "font-weight": "bold", "color": "black"}}>Before watching</span> this video please try and look past the following
                  issues with the quality of the video. (I might trying remaking the video one day to improve it.) Please focus on the idea itself of using a virtual space to collaborate with
                  customers to solve support issues.
                  <ul>
                    <li>There was a deadline to meet for the contest.</li>
                    <li>This was my first time to make a video.</li>
                    <li>And so it was my first time to use video and audio editing tools.</li>
                    <li>The avatars in OpenSim can't move their lips which distracts from the dialog.</li>
                    <li>I voiced the dialog myself. I used an audio editing tool to lower the frequency of my voice for one avatar
                        and to raise it for the other. Unfortunately, the effect seems a little comical.</li>
                    <li>Messages displayed when the Connect:Direct simulator is running are not readable.</li>
                    <li>The moving parts that simulate objects and data flow are hard to see.</li>
                  </ul>
                </p>
                <p className="TextBodyColumn">
                  But undaunted, I present the video to you anyway. What do you think of the idea?
                </p>
              </div>
              <div style={{"float": "left", "width": "50%"}}>
                <video width="640" height="480" controls>
                  <source src="http://kpsportfolio.info/VirtualSupport.mp4" type="video/mp4" />
                </video>
              </div>
          </div>
        </div>
      </div>,
      this.targetContainer
    );
  }

  displayWiseEliza(event) {
    this.reactDomRender (
      <div>
        <TopBar className="TopBar" displayHeading={true}/>
        <NavMenu/>
        <div className="MainView">
          <h1 className="PageHeading">Wise Eliza</h1>
            <p className="TextBody">
            </p>
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
              <img src={require("./Images/ChildlikeHomepage.png")} width="720px" height="480px" style={{"border-style": "solid", "border-width": "1px", "border-color": "dark gray"}} usemap="#clhpmap"/>
              <div>
                <map name="clhpmap">
                  <area shape="rect" coords="0,0,215,160" href="javascript:void(0)" alt="Sun" onClick={this.clhpSun}/>
                  <area shape="rect" coords="550,75,700,300" href="https://www.google.com" alt="House"/>
                  <area shape="rect" coords="550,400,700,430" href="https://www.google.com" alt="Signature"/>
                </map>
              </div>
            </div>
          </div>
        </div>
      </div>,
      this.targetContainer
    );
  }

  clhpSun(event) {
    alert("Sun clicked.");
  }

  render() {
    return(
      <div className="NavMenu">
        <div>&nbsp;</div>
        <div>&nbsp;<i className="far fa-folder" style={{"color": "#ffffff"}}>&nbsp;&nbsp;</i><a href="http://kpsportfolio.info">Home</a></div>
        <div>&nbsp;</div>
        <div>&nbsp;<i className="far fa-folder" style={{"color": "#ffffff"}}>&nbsp;&nbsp;</i><a href="javascript:void(0)" onClick={this.displayAbout}>About</a></div>
        <div>&nbsp;</div>
        <div>&nbsp;<i className="far fa-folder" style={{"color": "#ffffff"}}>&nbsp;&nbsp;</i><a href="javascript:void(0)" onClick={this.displayGospel}>The&nbsp;Gospel</a></div>
        <div>&nbsp;</div>
        <div>&nbsp;<i className="far fa-folder" style={{"color": "#ffffff"}}>&nbsp;&nbsp;</i><a href="javascript:void(0)" onClick={this.displayDoistDemo}>Doist&nbsp;Demo</a></div>
        <div>&nbsp;</div>
        <div>&nbsp;<i className="far fa-folder" style={{"color": "#ffffff"}}>&nbsp;&nbsp;</i><a href="javascript:void(0)" onClick={this.displayVirtualSupport}>Virtual&nbsp;Support</a></div>
        <div>&nbsp;</div>
        <div>&nbsp;<i className="far fa-folder" style={{"color": "#ffffff"}}>&nbsp;&nbsp;</i><a href="javascript:void(0)" onClick={this.displayWiseEliza}>Wise&nbsp;Eliza</a></div>
        <div>&nbsp;</div>
        <div>&nbsp;<i className="far fa-folder" style={{"color": "#ffffff"}}>&nbsp;&nbsp;</i><a href="javascript:void(0)" onClick={this.displayChildlikeHomepage}>Childlike&nbsp;Homepage</a></div>
     </div>
    );
  }
}
