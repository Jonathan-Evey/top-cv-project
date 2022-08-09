import React, { Component } from "react";
import GeneralInfo from "./GeneralInfo";
import EducationalExperience from "./EducationalExperience";
import PracticalExperience from "./PracticalExperience";

export class Form extends Component {
	constructor(props) {
		super(props);

		this.handleGeneralInfoChange = this.handleGeneralInfoChange.bind(this);
		this.handleEducationInfoChange =
			this.handleEducationInfoChange.bind(this);

		this.state = {
			generalInfoData: {
				firstName: "",
				lastName: "",
				email: "",
				phoneNumber: "",
			},
			educationData: {
				degree: "",
				school: "",
				fieldOfStudy: "",
				dateFrom: "",
				dateTo: "",
			},
		};
	}

	handleGeneralInfoChange(id, value) {
		if (id === "firstName") {
			this.setState({
				generalInfoData: {
					firstName: value,
				},
			});
			console.log(this.state.generalInfoData.firstName);
		}
		if (id === "lastName") {
			this.setState({
				generalInfoData: {
					lastName: value,
				},
			});
			console.log(this.state.generalInfoData.lastName);
		}
		if (id === "email") {
			this.setState({
				generalInfoData: {
					email: value,
				},
			});
			console.log(this.state.generalInfoData.email);
		}
		if (id === "phoneNumber") {
			this.setState({
				generalInfoData: {
					phoneNumber: value,
				},
			});
			console.log(this.state.generalInfoData.phoneNumber);
		}
	}

	handleEducationInfoChange(id, value) {
		if (id === "degree") {
			this.setState({
				educationData: {
					degree: value,
				},
			});
			console.log(this.state.educationData.degree);
		}
		if (id === "school") {
			this.setState({
				educationData: {
					school: value,
				},
			});
			console.log(this.state.educationData.school);
		}
		if (id === "fieldOfStudy") {
			this.setState({
				educationData: {
					fieldOfStudy: value,
				},
			});
			console.log(this.state.educationData.fieldOfStudy);
		}
		if (id === "dateFrom") {
			this.setState({
				educationData: {
					dateFrom: value,
				},
			});
			console.log(this.state.educationData.dateFrom);
		}
		if (id === "dateTo") {
			this.setState({
				educationData: {
					dateTo: value,
				},
			});
			console.log(this.state.educationData.dateTo);
		}
	}

	render() {
		const generalInfoData = this.state.generalInfoData;
		const educationData = this.state.educationData;
		return (
			<form action="">
				<GeneralInfo
					generalInfoData={generalInfoData}
					onGeneralInfoChange={this.handleGeneralInfoChange}
				/>
				<EducationalExperience
					educationData={educationData}
					onEducationInfoChange={this.handleEducationInfoChange}
				/>
				<PracticalExperience />
			</form>
		);
	}
}

export default Form;
