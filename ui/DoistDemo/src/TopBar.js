import React, {Component} from 'react'

export default class TopBar extends Component {
  constructor(props) {
    super(props)
    console.log("props.className: " + props.className)
  }

  render() {
    return(
      <div className={this.props.className}/>
    );
  }
}
