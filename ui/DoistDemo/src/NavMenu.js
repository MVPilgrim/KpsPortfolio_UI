import React, {Component} from 'react'
import ReactDom from 'react-dom'

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

    this.mainViewRef     = props.mainViewRef;
    this.reactDomRender  = ReactDom.render;
    this.reactDomRender  = this.reactDomRender.bind(this);
    this.targetContainer = document.getElementById('app');
  }

  displayAbout(event) {
    this.reactDomRender (
      <div>
        <TopBar className="TopBar"/>
        <NavMenu/>
        <div className="MainView">
          <h1 className="PageHeading">About KpsPortfolio</h1>
          <img className="KpsPhoto" src={require("./Images/KpsButler.png")}/>
          <p className="TextBody">
            Hi! My name is Kevin and I'll be your server today. And I can
            program your computer server as well.
          </p>
          <br/>
          <p className="TextBody">
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
        <TopBar className="TopBar"/>
        <NavMenu/>
        <div className="MainView" style={{"overflow": "scroll"}}>
          <h1>The Gospel</h1>
            <p className="TextBody">
              Putting your faith in Jesus Christ is absolutely the most important thing you can do.
              Please take a minute or two to read the Bible verse and the explanatory text that appears when you
              hover over each line in the verse.
            </p>
            <br/>
            <br/>
            <span className="GospelHeading">
              John 3:16<br/>
            </span>
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
            <div className="GospelPrayer">
              If you do, tell God something like this:
              Lord, I need you. Please come into my life.
              Thank you for dying on the cross for my sins.
              I believe you did that and that you rose from the dead.
              Because you are alive, I can live forever, too, in heaven with you.
              Please show me what's next.
              Amen.
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
        <TopBar className="TopBar"/>
        <NavMenu/>
        <DoistDemoMain/>
      </div>,
      this.targetContainer
    );
  }

  displayVirtualSupport(event) {
    this.reactDomRender (
      <div>
        <TopBar className="TopBar"/>
        <NavMenu/>
        <div className="MainView">
          <h1>Virtual Support</h1>
            <p className="TextBody">
              The intention is to demonstrate proficiency in a number of software technologies and some idea of me as a person.
              The intention is to demonstrate proficiency in a number of software technologies and some idea of me as a person.
              The intention is to demonstrate proficiency in a number of software technologies and some idea of me as a person.
              The intention is to demonstrate proficiency in a number of software technologies and some idea of me as a person.
              The intention is to demonstrate proficiency in a number of software technologies and some idea of me as a person.
              The intention is to demonstrate proficiency in a number of software technologies and some idea of me as a person.
              The intention is to demonstrate proficiency in a number of software technologies and some idea of me as a person.
              The intention is to demonstrate proficiency in a number of software technologies and some idea of me as a person.
            </p>
        </div>
      </div>,
      this.targetContainer
    );
  }

  displayWiseEliza(event) {
    this.reactDomRender (
      <div>
        <TopBar className="TopBar"/>
        <NavMenu/>
        <div className="MainView">
          <h1>Wise Eliza</h1>
            <p className="TextBody">
              The intention is to demonstrate proficiency in a number of software technologies and some idea of me as a person.
              The intention is to demonstrate proficiency in a number of software technologies and some idea of me as a person.
              The intention is to demonstrate proficiency in a number of software technologies and some idea of me as a person.
              The intention is to demonstrate proficiency in a number of software technologies and some idea of me as a person.
              The intention is to demonstrate proficiency in a number of software technologies and some idea of me as a person.
              The intention is to demonstrate proficiency in a number of software technologies and some idea of me as a person.
              The intention is to demonstrate proficiency in a number of software technologies and some idea of me as a person.
              The intention is to demonstrate proficiency in a number of software technologies and some idea of me as a person.
            </p>
        </div>
      </div>,
      this.targetContainer
    );
  }

  displayChildlikeHomepage(event) {
    this.reactDomRender (
      <div>
        <TopBar className="TopBar"/>
        <NavMenu/>
        <div className="MainView">
          <h1>Childlike Homepage</h1>
            <p className="TextBody">
              The intention is to demonstrate proficiency in a number of software technologies and some idea of me as a person.
              The intention is to demonstrate proficiency in a number of software technologies and some idea of me as a person.
              The intention is to demonstrate proficiency in a number of software technologies and some idea of me as a person.
              The intention is to demonstrate proficiency in a number of software technologies and some idea of me as a person.
              The intention is to demonstrate proficiency in a number of software technologies and some idea of me as a person.
              The intention is to demonstrate proficiency in a number of software technologies and some idea of me as a person.
              The intention is to demonstrate proficiency in a number of software technologies and some idea of me as a person.
              The intention is to demonstrate proficiency in a number of software technologies and some idea of me as a person.
            </p>
        </div>
      </div>,
      this.targetContainer
    );
  }

  render() {
    return(
      <div className="NavMenu">
        <div>&nbsp;</div>
        <div>&nbsp;<i className="far fa-folder">&nbsp;&nbsp;</i><a href="http://kpsportfolio.info">Home</a></div>
        <div>&nbsp;</div>
        <div>&nbsp;<i className="far fa-folder">&nbsp;&nbsp;</i><a href="javascript:void(0)" onClick={this.displayAbout}>About</a></div>
        <div>&nbsp;</div>
        <div>&nbsp;<i className="far fa-folder">&nbsp;&nbsp;</i><a href="javascript:void(0)" onClick={this.displayGospel}>The&nbsp;Gospel</a></div>
        <div>&nbsp;</div>
        <div>&nbsp;<i className="far fa-folder">&nbsp;&nbsp;</i><a href="javascript:void(0)" onClick={this.displayDoistDemo}>Doist&nbsp;Demo</a></div>
        <div>&nbsp;</div>
        <div>&nbsp;<i className="far fa-folder">&nbsp;&nbsp;</i><a href="javascript:void(0)" onClick={this.displayVirtualSupport}>Virtual&nbsp;Support</a></div>
        <div>&nbsp;</div>
        <div>&nbsp;<i className="far fa-folder">&nbsp;&nbsp;</i><a href="javascript:void(0)" onClick={this.displayWiseEliza}>Wise&nbsp;Eliza</a></div>
        <div>&nbsp;</div>
        <div>&nbsp;<i className="far fa-folder">&nbsp;&nbsp;</i><a href="javascript:void(0)" onClick={this.displayChildlikeHomepage}>Childlike&nbsp;Homepage</a></div>
     </div>
    );
  }
}
