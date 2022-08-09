import React, { Component } from "react";
import "/home/gunnar/Desktop/cv-project/src/styles/generalInfo.css";
import Input from "../Input";

export class GeneralInfo extends Component {
	constructor(props) {
		super(props);

		this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
		this.handleLastNameChange = this.handleLastNameChange.bind(this);

		// this.state = {
		// 	firstName: "",
		// 	lastName: "",
		// 	email: "",
		// 	phoneNumber: null,
		// };

		// this.updateFirstName = this.updateFirstName.bind(this);
		// this.updateLastName = this.updateLastName.bind(this);
		// this.updateEmail = this.updateEmail.bind(this);
		// this.updatePhoneNumber = this.updatePhoneNumber.bind(this);

		// this.saveGeneralInfo = this.saveGeneralInfo.bind(this);
	}

	handleFirstNameChange(value) {
		console.log(value);
		this.props.onGeneralInfoChange("firstName", value);
	}

	handleLastNameChange(value) {
		console.log(value);
		this.props.onGeneralInfoChange("lastName", value);
	}

	render() {
		const firstName = this.props.generalInfoData.firstName;
		const lastName = this.props.generalInfoData.lastName;
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
						id="last-name"
						placeholder="Last Name"
						value={lastName}
						onInputChange={this.handleLastNameChange}
					/>
				</div>
				<label htmlFor="email">Email Address:</label>
				<input
					type="email"
					name=""
					id="email"
					placeholder="example@email.come"
					// value={this.state.email}
					// onChange={(e) => this.updateEmail(e)}
				/>

				<label htmlFor="phone-number">Phone Number:</label>
				<input
					type="tel"
					name=""
					id="phone-number"
					placeholder="555-555-5555"
					// value={this.state.phoneNumber}
					// onChange={(e) => this.updatePhoneNumber(e)}
				/>

				<button>Save</button>
			</fieldset>
		);
	}
}

export default GeneralInfo;
