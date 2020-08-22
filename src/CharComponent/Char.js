import React from "react"
const charComponent=(props)=>{
   const style={
    display:'inline-block',
    padding:'16px',
    margin:"16px",
    border:"1px solid black",
    textAlign:"center"

    }
    return (
			<div style={style}>
				<p onClick={props.delete}>{props.charChar}</p>
			</div>
		);
}
export default charComponent;