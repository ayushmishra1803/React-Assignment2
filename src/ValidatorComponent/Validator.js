import React from "react"
const validator=(props)=>{
    let ShowMessage=null;
  if (props.numberOfText>0) {
      ShowMessage = ( 
           <div>
					<p>HEllo</p>
				</div>
				
			);
          
      
	}
    return(
       <div>
         {ShowMessage}
           </div>
    )
}
export default validator;