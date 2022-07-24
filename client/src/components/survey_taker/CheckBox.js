import React from "react";
import Form from "react-bootstrap/Form";
const CheckBox = ({ disabled, id, answer, value}) => {

    return (
        <Form.Check
            className="construct-answer"
            id="disabled"
            value={value}
            name={id.toString()}
            type="checkbox"
            disabled={disabled}
            label={answer}
             />
    )
}

export default CheckBox;