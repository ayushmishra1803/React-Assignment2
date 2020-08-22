import React, { Component } from "react";
import Validator from "./ValidatorComponent/Validator";
import "./App.css";

class App extends Component {
	state = {
		Message: "",
	};

	UpdatesMessageHandler = (event) => {
		let message = event.target.value;
		this.setState({
			Message: message,
		});
	};

	MessageLength;
	render() {
		return (
			<div className="App">
				<h1>Assignment 2</h1>
				<input type="text" onChange={this.UpdatesMessageHandler} />
				<br />
				<p>{this.state.Message}</p>

				<Validator numberOfText={this.state.Message.length} />
			</div>
		);
	}
}

export default App;
