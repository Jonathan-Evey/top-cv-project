import React, { Component } from 'react'
import "/home/gunnar/Desktop/cv-project/src/styles/education.css"

export class EducationalExperience extends Component {
  render() {
    return (
      <fieldset>
          <legend>Educational Experience</legend>
          
          <label htmlFor="">Highest Educational Experience:</label>
          <input type="text" name="" id="" />

          <label htmlFor="">School Name:</label>
          <input type="text" name="" id="" />

          <label htmlFor="">Title of Study:</label>
          <input type="text" name="" id="" />

          <fieldset className='study-container'>
            <legend>Dates of Study</legend>
            <label htmlFor="">From:</label>
            <input type="date" name="" id="" /> 

            <label htmlFor="">To:</label>
            <input type="date" name="" id="" /> 
            
          </fieldset>
      </fieldset>
    )
  }
}

export default EducationalExperience