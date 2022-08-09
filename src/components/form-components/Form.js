import React, { Component } from "react";
import GeneralInfo from "./GeneralInfo";
import EducationalExperience from "./EducationalExperience";
import PracticalExperience from "./PracticalExperience";

export class Form extends Component {
	constructor(props) {
		super(props);

		this.handleGeneralInfoChange = this.handleGeneralInfoChange.bind(this);
		this.state = {
			generalInfoData: {
				firstName: "",
				lastName: "",
				email: "",
				phoneNumber: null,
			},
		};
	}

	updateFirstName(e) {
		this.setState({
			firstName: e.target.value,
		});
	}
	handleGeneralInfoChange(id, value) {
		console.log(id);
		console.log(value);
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
	}

	render() {
		const generalInfoData = this.state.generalInfoData;
		return (
			<form action="">
				<GeneralInfo
					generalInfoData={generalInfoData}
					onGeneralInfoChange={this.handleGeneralInfoChange}
				/>
				<EducationalExperience />
				<PracticalExperience />
			</form>
		);
	}
}

export default Form;
