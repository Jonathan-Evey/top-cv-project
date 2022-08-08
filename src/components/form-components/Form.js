import React, { Component } from 'react'
import GeneralInfo from './GeneralInfo'
import EducationalExperience from './EducationalExperience'
import PracticalExperience from './PracticalExperience'

export class Form extends Component {
  render() {
    return (
      <form action="">
          <GeneralInfo />
          <EducationalExperience />
          <PracticalExperience />
      </form>
    )
  }
}

export default Form