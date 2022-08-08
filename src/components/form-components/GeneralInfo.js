import React, { Component } from 'react'
import "/home/gunnar/Desktop/cv-project/src/styles/generalInfo.css"

export class GeneralInfo extends Component {
  render() {
    return (
      <fieldset>
          <legend>General Infromation</legend>
            <div className='name-container'>
                <label htmlFor="first-name">First Name:</label>
                <input type="text" name="" id="first-name" placeholder='First Name'/>

                <label htmlFor="last-name">Last Name:</label>
                <input type="text" name="" id="last-name" placeholder='Last Name' />
            </div>
            <label htmlFor="email">Email Address:</label>
            <input type="email" name="" id="email" placeholder='example@email.come'/>

            <label htmlFor="phone-number">Phone Number:</label>
            <input type="tel" name="" id="phone-number" placeholder='555-555-5555'/>

            <button>Save</button>
      </fieldset>
    )
  }
}

export default GeneralInfo