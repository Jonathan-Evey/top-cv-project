import React, { Component } from 'react'

export class Input extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
		this.props.onInputChange(e.target.value);
	}
  render() {
      const inputType = this.props.type
      const inputId = this.props.inputId
      const inputPlaceholder = this.props.inputPlaceholder
      const value = this.props.value
    return (
      <input 
        type={inputType} 
        id={inputId} 
        placeholder={inputPlaceholder} 
        value={value} 
        onChange={this.handleChange}/>
    )
  }
}

export default Input