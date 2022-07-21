import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import CloseButton from "react-bootstrap/CloseButton";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Form from "react-bootstrap/Form";

import "../styles/ConstructQuestion.css"
// data = {
//     question: "",
//     answers: ["", ""],
// }

// for now assuming multiple choice.

// using hook for the closebutton, call a delete callback function
const ConstructQuestion = ({ data, deleteForm, index, handleMoveUp, handleMoveDown}) => {

    const handleQuestionType = () => {
        console.log(data.type)
        if (!data.type) return;
        let formCheckType = "radio"

        if (data.type === "Check Boxes") formCheckType = "checkbox";

        if (data.type === "Open Ended") {
            console.log("open end")
            return <Form.Control as="textarea" className="text-field" disabled rows={3} />
        } else {
            return (data.answers.map((answer, i) => (<Form.Check key={i} className="construct-answer" id="disabled" type={formCheckType} disabled label={answer} />)))
        }
        
    }
    return (
        <Card className="question-card">
            <Card.Header className="card-header">
                <Card.Text className="construct-question">{data.question}</Card.Text>
                <ButtonGroup>
                <Button onClick={() => handleMoveUp(index)} variant="dark" className="create-button up-arrow">&#8593;</Button>
                <Button onClick={() => handleMoveDown(index)}variant="dark" className="create-button down-arrow">&#8595;</Button>
                <Button onClick={() => deleteForm(index)} variant="dark" className="create-button" >&#x2715;</Button>
                </ButtonGroup>
                
            </Card.Header>

            <Card.Body className="radio-button-container">
                {handleQuestionType()}
            </Card.Body>

        </Card>
    )

}

export { ConstructQuestion };