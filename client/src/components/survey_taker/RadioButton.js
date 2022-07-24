import React from "react";
import Form from "react-bootstrap/Form";
const RadioButton = ({ disabled, id, answer, value }) => {

    return (
        <Form.Check
            className="construct-answer"
            id="disabled"
            value={value}
            name={id.toString()}
            type="radio"
            disabled={disabled}
            label={answer}
             />
    )
}

export default RadioButton;