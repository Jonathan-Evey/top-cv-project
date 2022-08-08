import React, { Component } from 'react'
import "/home/gunnar/Desktop/cv-project/src/styles/experience.css"

export class PracticalExperience extends Component {
  render() {
    return (
      <fieldset>
          <legend>Past Experience</legend>

          <label htmlFor="">Company Name:</label>
          <input type="text" name="" id="" placeholder="Example Company"/>

          <label htmlFor="">Position Title</label>
          <input type="text" name="" id="" placeholder="Shift Manager"/>

          <label htmlFor="">Main Tasks of Job</label>
          <textarea name="" id="" cols="30" rows="5" placeholder="Description of what you did in this postion..."></textarea>

          <fieldset className='experience-container'>
            <legend>Experience Date Range</legend>
            <label htmlFor="">Start:</label>
            <input type="date" name="" id="" /> 

            <label htmlFor="">End:</label>
            <input type="date" name="" id="" /> 
            
          </fieldset>
          <button>Save</button>
      </fieldset>
    )
  }
}

export default PracticalExperience