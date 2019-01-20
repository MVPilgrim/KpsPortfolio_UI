import './App.css'
import TopBar from './TopBar.js'
import NavMenu from './NavMenu.js'

import React, {Component} from 'react'

class App extends Component {
  render() {
    return <div className="App">
      <TopBar/>
      <NavMenu/>
    </div>
  }
}

export default App
