import React, { Component } from 'react'

export class Buttons extends Component {
    
  render() {
    return (
      <button>{this.props.text}</button>
    )
  }
}

export default Buttons