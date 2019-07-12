import React, {Component} from 'react'

export default class ButtonDoistDemo extends Component {
  render() {
    return (
      <button
        className="DoistDemoButton"
        style={this.props.style}
        onClick={this.props.handleClick}>
        {this.props.label}
      </button>
    );
  }
};
