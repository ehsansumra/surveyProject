import React from "react";
import Form from "react-bootstrap/Form";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const handleQuestionType = (data, disabled, id=0) => {
    if (!data.type) return;
    let formCheckType = "radio"

    if (data.type === "Check Boxes") formCheckType = "checkbox";

    if (data.type === "Open Ended") {
        return <Form.Control as="textarea" className="text-field" disabled={disabled} rows={3} />
    } else {
        return (
            <div>
                {
                    data.answers.map((answer, i) => (
                        <Form.Check key={i}
                            className="construct-answer"
                            id="disabled"
                            name={id.toString()}
                            type={formCheckType}
                            disabled={disabled}
                            label={answer} />))
                }
            </div>
        )
    }
}

export default handleQuestionType;