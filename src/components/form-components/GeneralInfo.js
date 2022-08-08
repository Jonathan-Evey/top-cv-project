import React, { Component } from "react";
import "/home/gunnar/Desktop/cv-project/src/styles/generalInfo.css";

export class GeneralInfo extends Component {
	constructor() {
		super();

		this.state = {
			firstName: "",
			lastName: "",
			email: "",
			phoneNumber: null,
		};

		this.updateFirstName = this.updateFirstName.bind(this);
		this.updateLastName = this.updateLastName.bind(this);
		this.updateEmail = this.updateEmail.bind(this);
		this.updatePhoneNumber = this.updatePhoneNumber.bind(this);

		// this.saveGeneralInfo = this.saveGeneralInfo.bind(this);
	}
	updateFirstName(e) {
		this.setState({
			firstName: e.target.value,
		});
	}
	updateLastName(e) {
		this.setState({
			lastName: e.target.value,
		});
	}
	updateEmail(e) {
		this.setState({
			email: e.target.value,
		});
	}
	updatePhoneNumber(e) {
		this.setState({
			phoneNumber: e.target.value,
		});
	}

	render() {
		return (
			<fieldset>
				<legend>General Infromation</legend>
				<div className="name-container">
					<label htmlFor="first-name">First Name:</label>
					<input
						type="text"
						name=""
						id="first-name"
						placeholder="First Name"
						value={this.state.firstName}
						onChange={(e) => this.updateFirstName(e)}
					/>

					<label htmlFor="last-name">Last Name:</label>
					<input
						type="text"
						name=""
						id="last-name"
						placeholder="Last Name"
						value={this.state.lastName}
						onChange={(e) => this.updateLastName(e)}
					/>
				</div>
				<label htmlFor="email">Email Address:</label>
				<input
					type="email"
					name=""
					id="email"
					placeholder="example@email.come"
					value={this.state.email}
					onChange={(e) => this.updateEmail(e)}
				/>

				<label htmlFor="phone-number">Phone Number:</label>
				<input
					type="tel"
					name=""
					id="phone-number"
					placeholder="555-555-5555"
					value={this.state.phoneNumber}
					onChange={(e) => this.updatePhoneNumber(e)}
				/>

				<button>Save</button>
			</fieldset>
		);
	}
}

export default GeneralInfo;
