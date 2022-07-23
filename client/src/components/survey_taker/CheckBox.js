import React from "react";
import Form from "react-bootstrap/Form";
const CheckBox = ({ disabled, id, index, answer, updateCheckBoxes }) => {

    return (
        <Form.Check
            className="construct-answer"
            id="disabled"
            name={id.toString()}
            type="checkbox"
            disabled={disabled}
            label={answer}
            onClick= {(e) => updateCheckBoxes(e, id, index)} />
    )
}

export default CheckBox;