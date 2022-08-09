import React, { Component } from "react";
import "/home/gunnar/Desktop/cv-project/src/styles/generalInfo.css";
import Input from "../Input";

export class GeneralInfo extends Component {
	constructor(props) {
		super(props);

		this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
		this.handleLastNameChange = this.handleLastNameChange.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
	}

	handleFirstNameChange(value) {
		console.log(value);
		this.props.onGeneralInfoChange("firstName", value);
	}

	handleLastNameChange(value) {
		console.log(value);
		this.props.onGeneralInfoChange("lastName", value);
	}

	handleEmailChange(value) {
		this.props.onGeneralInfoChange("email", value);
	}

	handlePhoneNumberChange(value) {
		this.props.onGeneralInfoChange("phoneNumber", value);
	}

	render() {
		const firstName = this.props.generalInfoData.firstName;
		const lastName = this.props.generalInfoData.lastName;
		const email = this.props.generalInfoData.email;
		const phoneNumber = this.props.generalInfoData.phoneNumber;

		return (
			<fieldset>
				<legend>General Infromation</legend>
				<div className="name-container">
					<label htmlFor="first-name">First Name:</label>
					<Input
						inputType="text"
						name=""
						inputId="first-name"
						inputPlaceholder="First Name"
						value={firstName}
						onInputChange={this.handleFirstNameChange}
					/>

					<label htmlFor="last-name">Last Name:</label>
					<Input
						type="text"
						name=""
						inputId="last-name"
						inputPlaceholder="Last Name"
						value={lastName}
						onInputChange={this.handleLastNameChange}
					/>
				</div>
				<label htmlFor="email">Email Address:</label>
				<Input
					type="email"
					name=""
					inputId="email"
					inputPlaceholder="example@email.come"
					value={email}
					onInputChange={this.handleEmailChange}
				/>

				<label htmlFor="phone-number">Phone Number:</label>
				<Input
					type="tel"
					name=""
					inputId="phone-number"
					inputPlaceholder="555-555-5555"
					value={phoneNumber}
					onInputChange={this.handlePhoneNumberChange}
				/>

				<button>Save</button>
			</fieldset>
		);
	}
}

export default GeneralInfo;
