import React from "react";

 function Alert(props) {
  
   const Capitalize=(word)=>{
       
      return word.charAt(0).toUpperCase()+word.slice(1);
   }
  return (
    
      
      <div style={{height:'50px'}}>
      props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
      
      
      <strong>{Capitalize(props.alert.types)}</strong>:{props.alert.msg}
      

     </div>
    </div>
    
   
   
  );
}

export default Alert
