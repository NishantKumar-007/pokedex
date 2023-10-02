import React from 'react';

function Button({color, height, width}) {
    let buttonStyle = {
        backgroundColor: color,
        height: height,
        width: width,
        // Add other desired style properties here
      };
    
       
    return (
        <div style={buttonStyle} class="btn"><i class="icon-ok"></i></div>
    )
  }
  
  export default Button;
  