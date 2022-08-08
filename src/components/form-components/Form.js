import React, { Component } from 'react'
import GeneralInfo from './GeneralInfo'
import EducationalExperience from './EducationalExperience'

export class Form extends Component {
  render() {
    return (
      <form action="">
          <GeneralInfo />
          <EducationalExperience />
      </form>
    )
  }
}

export default Form