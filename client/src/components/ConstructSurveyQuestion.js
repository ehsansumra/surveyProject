import React, {useState} from "react";
import handleQuestionType from "../utils/HandleQuestionType";
import Card from "react-bootstrap/Card"

const ConstructSurveyQuestion = ({data, id, index=null, updateCheckBoxes, updateRadioButtons, updateOpenEnded}) => {
    //id param used for radio button groups identifier
    //binding inputs time,
    return (
        <Card className="question-card">

            <Card.Header className="card-header">
                <Card.Text className="construct-question">{data.question}</Card.Text>
            </Card.Header>

            <Card.Body className="radio-button-container">
                {handleQuestionType(data, false, id, index, updateCheckBoxes, updateRadioButtons, updateOpenEnded)}
            </Card.Body>

        </Card>
    )
}

export default ConstructSurveyQuestion;