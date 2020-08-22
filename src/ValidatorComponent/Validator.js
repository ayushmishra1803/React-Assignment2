import React from "react";
const validator = (props) => {
	let ShowMessage = null;
	if (props.numberOfText < 5) {
		ShowMessage = (
			<div>
				<p>Text To Short</p>
			</div>
		);
	} else if (props.numberOfText > 10) {
		ShowMessage = (
			<div>
				<p>Text To long</p>
			</div>
		);
	}
	return <div>{ShowMessage}</div>;
};
export default validator;
