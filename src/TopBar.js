import React, {Component} from 'react'

export default class TopBar extends Component {
  constructor(props) {
    super(props)
    console.log("props.className: " + props.className)
    console.log("props.displayHeading: " + props.displayHeading)
  }

  render() {
    if (this.props.displayHeading) {
      return(
        <div className={this.props.className}>
          <h1 style={{"font-size": "3em","color": "#ffffff", "line-height": "6.5%", "left": "70px", "position": "relative"}}>KPS Portfolio</h1>
        </div>
      );
    } else {
      return(
        <div className={this.props.className}/>
      );
    }
  }
}
