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
				<input type="text" onChange={this.UpdatesMessageHandler} />
				{this.state.Message.length}
				<Validator numberOfText={this.state.Message.length} />
			</div>
		);
	}
}

export default App;
