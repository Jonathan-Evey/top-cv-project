import React, { Component } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

export class App extends Component {
	render() {
		return (
			<div className="App">
        		<Header />
				<Main />
			</div>
		);
	}
}

export default App;
