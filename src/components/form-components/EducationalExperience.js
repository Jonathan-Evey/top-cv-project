import React, { Component } from 'react'
import Input from '../Input';
import "/home/gunnar/Desktop/cv-project/src/styles/education.css"

export class EducationalExperience extends Component {
  constructor(props) {
    super(props);
    
    this.handleDegreeChange = this.handleDegreeChange.bind(this);
    this.handleSchoolChange = this.handleSchoolChange.bind(this);
    this.handleFieldOfStudyChange = this.handleFieldOfStudyChange.bind(this);
    this.handleDateFromChange = this.handleDateFromChange.bind(this);
    this.handleDateToChange = this.handleDateToChange.bind(this);

  } 

  handleDegreeChange(value) {
    this.props.onEducationInfoChange("degree", value);
  }
  handleSchoolChange(value) {
    this.props.onEducationInfoChange("school", value);
  }
  handleFieldOfStudyChange(value) {
    this.props.onEducationInfoChange("fieldOfStudy", value);
  }
  handleDateFromChange(value) {
    this.props.onEducationInfoChange("dateFrom", value);
  }
  handleDateToChange(value) {
    this.props.onEducationInfoChange("dateTo", value);
  }

  render() {
    const degree = this.props.educationData.degree;
		const school = this.props.educationData.school;
		const fieldOfStudy = this.props.educationData.fieldOfStudy;
		const dateFrom = this.props.educationData.dateFrom;
    const dateTo = this.props.educationData.dateTo;

    return (
      <fieldset>
          <legend>Educational Experience</legend>
          
          <label htmlFor="">Highest Educational Experience:</label>
          <Input type="text" name="" inputId="" inputPlaceholder="High School, GED, Bachelor's Degree, ect" value={degree} onInputChange={this.handleDegreeChange}/>

          <label htmlFor="">School Name:</label>
          <Input type="text" name="" inputId="" inputPlaceholder="Example University of Washington" value={school} onInputChange={this.handleSchoolChange}/>

          <label htmlFor="">Title of Study:</label>
          <Input type="text" name="" inputId="" inputPlaceholder="Computer Science" value={fieldOfStudy} onInputChange={this.handleFieldOfStudyChange}/>

          <fieldset className='study-container'>
            <legend>Dates of Study</legend>
            <label htmlFor="">From:</label>
            <Input type="date" name="" inputId="" value={dateFrom} onInputChange={this.handleDateFromChange}/> 

            <label htmlFor="">To:</label>
            <Input type="date" name="" inputId="" value={dateTo} onInputChange={this.handleDateToChange}/> 
            
          </fieldset>
          <button>Save</button>
      </fieldset>
    )
  }
}

export default EducationalExperience