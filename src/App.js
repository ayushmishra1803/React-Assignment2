import React, { Component } from "react";
import Validator  from "./ValidatorComponent/Validator";
import "./App.css";
import CharComponent from "./CharComponent/Char";

class App extends Component {
	state = {
		Message:""
	};
	MessageArray
	ShoWMEssageArray
	UpdatesMessageHandler = (event) => {
		let message = event.target.value;
		this.setState({
			Message: message,
		});
		this.MessageArray =this.state.Message.split("");
	this.ShoWMEssageArray=	this.MessageArray.map(re=>{
			return <CharComponent />;
		})
	};
	
	MessageLength;
	render() {
		return (
			<div className="App">
				<input type="text" onChange={this.UpdatesMessageHandler} />
				{this.state.Message.length}
				<Validator numberOfText={this.state.Message.length} />
				{this.MessageArray}
			</div>
		);
	}
}

export default App;
