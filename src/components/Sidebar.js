import React, { Component } from 'react'
import Buttons from './sidebar-components/Buttons'

export class Sidebar extends Component {
  render() {
    return (
      <div className='sidebar-container'>
        <Buttons text="Generate PDF" />
        <Buttons text="Add Addtional Work Experience" />
      </div>
    )
  }
}

export default Sidebar