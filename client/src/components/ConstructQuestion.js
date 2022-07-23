import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import CloseButton from "react-bootstrap/CloseButton";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Form from "react-bootstrap/Form";
import "../styles/ConstructQuestion.css"
import handleQuestionType from "../utils/HandleQuestionType";

// data = {
//     question: "",
//     answers: ["", "", ...],
//     type: "Multiple Choice" || "Check Boxes" || "Open Ended"
// }
const ConstructQuestion = ({ data, deleteForm, index, handleMoveUp, handleMoveDown }) => {

    return (
        <Card className="question-card">

            <Card.Header className="card-header">
                <Card.Text className="construct-question">{data.question}</Card.Text>
                <ButtonGroup>
                    <Button onClick={() => handleMoveUp(index)} variant="dark" className="create-button up-arrow">&#8593;</Button>
                    <Button onClick={() => handleMoveDown(index)} variant="dark" className="create-button up-arrow">&#8595;</Button>
                    <Button onClick={() => deleteForm(index)} variant="dark" className="create-button" >&#x2715;</Button>
                </ButtonGroup>
            </Card.Header>

            <Card.Body className="radio-button-container">
                {handleQuestionType(data, true)}
            </Card.Body>

        </Card>
    )

}

export { ConstructQuestion };