import React, { Component } from "react";
import Validator from "./ValidatorComponent/Validator";
import "./App.css";
import Char from "./CharComponent/Char";

class App extends Component {
	state = {
		Message: "",
	};

	UpdatesMessageHandler = (event) => {
		this.setState({
			Message: event.target.value,
		});
	};
	deleteOnClick = (index) => {
		const text=this.state.Message.split("");
		text.splice(index,1);
		const UpdatedMessage=text.join("")
		this.setState({
			Message:UpdatedMessage
		})
	};
	render() {
		const CharList = this.state.Message.split("").map((re, index) => {
			return (
				<Char
					charChar={re}
					key={index}
					delete={() => this.deleteOnClick(index)}
				/>
			);
		});
		return (
			<div className="App">
				<h1>Assignment 2</h1>
				<input
					type="text"
					onChange={this.UpdatesMessageHandler}
					value={this.state.Message}
				/>
				<br />
				<p>{this.state.Message}</p>

				<Validator numberOfText={this.state.Message.length} />
				{CharList}
			</div>
		);
	}
}

export default App;
