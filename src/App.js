import React, { Component } from "react";
import Header from "./components/Header";

export class App extends Component {
	render() {
		return (
			<div className="App">
        <Header />
				<p>Hello!</p>
			</div>
		);
	}
}

export default App;
