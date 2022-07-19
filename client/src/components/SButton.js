import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const SButton = (props) => {
    
    return (
        
        <Button 
            variant={props.variant ? props.variant : "primary"}
            onClick={props.onClick} 
            style={props.style}
            className={props.className}
        
        >{props.text}</Button>
    );

}

export { SButton };