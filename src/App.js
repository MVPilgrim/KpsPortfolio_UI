import './App.css'
import TopBar from './TopBar.js'
import NavMenu from './NavMenu.js'
import MainView from './MainView.js'

import React, {Component} from 'react'
//import ReactDom from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.mainViewRef = React.createRef();
  }

  render() {
    return <div className="App">
      <TopBar className="TopBar" displayHeading={true}/>
      <NavMenu mainViewRef={this.mainViewRef} />
      <MainView mainViewRef={this.mainViewRef} />
    </div>
  }
}

export default App
