import React, {useState} from "react";
import handleQuestionType from "../utils/HandleQuestionType";
import Card from "react-bootstrap/Card"

const ConstructSurveyQuestion = ({data, id}) => {
    //id param used for radio button groups identifier
    return (
        <Card className="question-card">

            <Card.Header className="card-header">
                <Card.Text className="construct-question">{data.question}</Card.Text>
            </Card.Header>

            <Card.Body className="radio-button-container">
                {handleQuestionType(data, false, id)}
            </Card.Body>

        </Card>
    )
}

export default ConstructSurveyQuestion;