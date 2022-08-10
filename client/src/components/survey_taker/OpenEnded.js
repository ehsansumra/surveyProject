import React, { useState } from "react"
import Form from "react-bootstrap/Form";
// hook may be an array of arrays
// pass in a hook in here, use its update input function to bind to onChange.
const OpenEnded = ({ disabled , updateOpenEnded, id, index}) => {
    
    return (
        <Form.Control
            as="textarea"
            className="text-field"
            disabled={disabled}
            rows={3} 
            onChange= {(e) => updateOpenEnded(e, index)}/>
    )
}

export default OpenEnded;