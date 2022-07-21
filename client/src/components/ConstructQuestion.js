import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";

import "../styles/ConstructQuestion.css"
// data = {
//     question: "",
//     answers: ["", ""],
// }

// for now assuming multiple choice.
const ConstructQuestion = ({ data }) => {

    return (
        <Card className="question-card">
            <Card.Header className="construct-question">{data.question}</Card.Header>

            <Card.Body className="radio-button-container">
                
                    {data.answers.map((answer, i) => (<Form.Check className="construct-question" id="disabled" type="radio" disabled label={answer}/>))}
                  

            </Card.Body>

        </Card>
    )

}

export { ConstructQuestion };