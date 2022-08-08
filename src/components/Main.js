import React, { Component } from "react";
import Section from "./Section";
import Sidebar from "./Sidebar";

import "/home/gunnar/Desktop/cv-project/src/styles/main.css"

export class Main extends Component {
	render() {
		return (
			<main>
				<Section />
				<Sidebar />
			</main>
		);
	}
}

export default Main;
