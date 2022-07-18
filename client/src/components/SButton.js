import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const SButton = (props) => {
    
    return (
        <Button onClick={props.onClick} style={props.style}>{props.text}</Button>
    );

}

export { SButton };