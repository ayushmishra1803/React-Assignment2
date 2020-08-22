import React from "react"
const charComponent=(props)=>{
   const style={
    display:'inline-block',
    padding:'16px',
    margin:"16px",
    border:"1px solid block",
    textAlign:"center"

    }
    return (
			<div style={style}>
				<p>{props.charChar}</p>
			</div>
		);
}
export default charComponent;