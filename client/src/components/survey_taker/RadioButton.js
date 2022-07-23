import React from "react";
import Form from "react-bootstrap/Form";
const RadioButton = ({ disabled, id, index, answer, updateRadioButtons }) => {

    return (
        <Form.Check
            className="construct-answer"
            id="disabled"
            name={id.toString()}
            type="radio"
            disabled={disabled}
            label={answer}
            onChange= {(e) => updateRadioButtons(e, id, index)} />
    )
}

export default RadioButton;