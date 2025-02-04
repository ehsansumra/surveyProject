import React, { useState, useEffect, Component } from 'react';
import '../styles/CreateSurvey.css';
import { SButton } from "../components/SButton"
import { QuestionForm } from '../components/QuestionForm';
import { ConstructQuestion } from "../components/ConstructQuestion";
import { FormDataHook } from '../hooks/FormDataHook';
import Card from "react-bootstrap/Card"
import { QuestionTypeHook } from '../hooks/QuestionTypeHook';
import { Link } from "react-router-dom";
import Page from '../components/Page';
import Button from 'react-bootstrap/Button';
const CreateSurvey = () => {
    const [completedSurveyId, setCompletedSurveyId] = useState(null);

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
    const completeSurvey = async () => {
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

        const id = await fetch('/api/survey', {
            method: 'POST', // or 'PUT'
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(completedSurveyData),
        })
            .then((response) => response.text())
            .then((data) => {
                console.log('Success:', data);
                return data;
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        setCompletedSurveyId(id);
    }

    return (
        <Page>
            {!completedSurveyId ?
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
                        <Card.Header className="card-header" >{"Create a question"}</Card.Header>
                        <Card.Body className="button-container">
                            <SButton variant="dark" onClick={() => setQuestionType("Multiple Choice")} className="create-button" text="Multiple Choice" />
                            <SButton variant="dark" onClick={() => setQuestionType("Check Boxes")} className="create-button" text="Check Boxes" />
                            <SButton variant="dark" onClick={() => setQuestionType("Open Ended")} className="create-button" text="Open Ended" />

                        </Card.Body>
                    </Card>

                    <div className="break"></div>
                    {type ?
                        <QuestionForm key={type} type={type} addForm={addFormRemoveQuestionForm} />
                        : null}
                    <Button variant="outline-light" onClick={() => completeSurvey()} className="create-button">Complete</Button>

                </div>
                :
                <div className="main-content">
                    <Card style={{ marginTop: "100px" }} className="question-card">
                        <Card.Body>
                            <Card.Text>
                                Survey Successfully created. Share this link:
                            </Card.Text>
                            <Card.Text>
                                {"localhost:3000/take_survey?surveyId=" + completedSurveyId.toString()}
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>

            }


        </Page>

    )
}

export default CreateSurvey;