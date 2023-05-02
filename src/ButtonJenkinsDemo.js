import React, {Component} from 'react'

// Test
export default class ButtonJenkinsDemo extends Component {
  render() {
    return (
      <button
        className="JenkinsDemoButton"
        style={this.props.style}
        onClick={this.props.handleClick}>
        {this.props.label}
      </button>
    );
  }
};
