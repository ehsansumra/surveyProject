import React, { useState, useEffect } from 'react';
import '../styles/CreateSurvey.css';
import { SButton } from "./SButton"
import { QuestionForm } from './QuestionForm';
import { ConstructQuestion } from "./ConstructQuestion";
import { FormDataHook } from '../hooks/FormDataHook';
import Card from "react-bootstrap/Card"
import { QuestionTypeHook } from '../hooks/QuestionTypeHook';

const CreateSurvey = () => {

    const [component, setComponent] = useState(null);

    const {
        addFormData,
        deleteFormData,
        moveQuestionDown,
        moveQuestionUp,
        formData // state
    } = FormDataHook();

    const { setQuestionType, type } = QuestionTypeHook();

    //This will ensure that the QuestionForm unrenders after addForm is called.
    const addFormRemoveQuestionForm = (data) => {
        addFormData(data)
        setQuestionType(null);
    }

    // Once the survey is created and saved by user,
    // we want to assign an id based on index to each question in formData.
    // This way we have an identifier for each question for future use.
    const completeSurvey = () => {
        if (!formData.length) return;

        let formDataCopy = [...formData];
        const completedSurveyData = formDataCopy.map((data, i) => {
            return {
                question: formDataCopy[i].question,
                answers: formDataCopy[i].answers,
                type: formDataCopy[i].type,
                id: i
            }
        })

        //this will have to be a fetch most likely. its time for backend work.
        console.log(completedSurveyData)
    }

    return (

        <div className="main-content">
            {formData.map((data, i) => (
                <ConstructQuestion key={i}
                    index={i}
                    data={data}
                    deleteForm={deleteFormData}
                    handleMoveUp={moveQuestionUp}
                    handleMoveDown={moveQuestionDown} />
            ))}

            <Card className="create-box">
                <Card.Header className="card-header" >Add a question.</Card.Header>
                <Card.Body className="button-container">
                    <SButton variant="dark" onClick={() => setQuestionType("Multiple Choice")} className="create-button" text="Multiple Choice" />
                    <SButton variant="dark" onClick={() => setQuestionType("Check Boxes")} className="create-button" text="Check Boxes" />
                    <SButton variant="dark" onClick={() => setQuestionType("Open Ended")} className="create-button" text="Open Ended" />
                    <SButton variant="dark" onClick={() => completeSurvey()} className="create-button" text="Complete" />
                </Card.Body>
            </Card>

            <div className="break"></div>
            {type ?
                <QuestionForm key={type} type={type} addForm={addFormRemoveQuestionForm} />
                : null}

        </div>

    )
}

export default CreateSurvey;