import React, { useState, useEffect } from "react";
import ConstructSurveyQuestion from "../components/ConstructSurveyQuestion";
import SurveyTakerDataHook from "../hooks/SurveyTakerDataHook";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Page from '../components/Page';
import Nav from 'react-bootstrap/Nav';
import { Link, useSearchParams } from "react-router-dom";
// Router will take survey id, route this page where a fetch request is made based on this ID.
// fetch will receive question data as a response
// take in question data and construct a page.
// questionData = [{}, {}, {},]
// questionData[i] = {
//     id: 0,
//     question: "",
//     answers: ["", "", "", ...]
//     type: "Multiple Choice" || "Check Boxes" || "Open Ended"
// }
const TakeSurvey = () => {

    const [surveyData, setSurveyData] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();

    const {
        initializeAnswerInputs,
        updateCheckBoxes,
        updateRadioButtons,
        updateOpenEnded,
        answerInputs
    } = SurveyTakerDataHook();
    let completedSurveyData = null; //this will be updated at final submission

    useEffect(() => {
        const surveyId = searchParams.get("surveyId");
        fetch("/api/take_survey/" + surveyId)
            .then(res => res.json())
            .then(resSurveyData => {
                console.log("initial", resSurveyData);
                setSurveyData(resSurveyData);
                const newArr = resSurveyData.map(question => {
                    return {
                        id: question.index,
                        type: question.type,
                        answers: [],
                    }
                })

                console.log("req", newArr);

                completedSurveyData = newArr;

                const answersArr = newArr.map(question => (
                    question.answers
                ))
                console.log("after ", answersArr);

                initializeAnswerInputs(answersArr);
            })
    }, [])

    // Example of what answer data should look like after submission
    // const answerData = [
    //     {
    //         id: 0,
    //         type: "Multiple Choice",
    //         answers: [2],
    //     },
    //     {
    //         id: 1,
    //         type: "Check Boxes",
    //         answers: [1, 3, 4]
    //     },
    //     {
    //         id: 2,
    //         type: "Open Ended",
    //         answers: ["long ass string"]
    //     }
    // ]
    const handleSurveySubmit = async() => {
        const surveyId = searchParams.get("surveyId");

        let idx = -1;
        const submissionData = surveyData.map(data => {
            idx++;
            return {
                questionId: data.id,
                data: answerInputs[idx]
            }
        })

        await fetch('/api/complete_survey', {
            method: 'POST', // or 'PUT'
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(submissionData),
        }).then(res => setSubmitted(true))

        
    }

    return (
        <Page>
            {submitted === false ?
                <Form className="main-content">
                    {
                        surveyData ?
                            surveyData.map((question, i) => (
                                <ConstructSurveyQuestion
                                    updateCheckBoxes={updateCheckBoxes}
                                    updateRadioButtons={updateRadioButtons}
                                    updateOpenEnded={updateOpenEnded}
                                    key={question.id}
                                    data={question}
                                    id={question.id}
                                    index={question.index} />))
                            : 
                            <Card className="question-card">
                                <Card.Body>
                                    Loading...
                                </Card.Body>
                            </Card>

                    }
                    {/* <Card></Card> */}
                    <Link to="../create_survey"><Button variant="outline-light" className="create-button">Create Survey</Button></Link>
                    <Button onClick={handleSurveySubmit} variant="outline-light" className='create-button'>Submit</Button>
                </Form>
                :
                <Form className="main-content">
                    <Card style={{marginTop:"100px"}}className="question-card">
                        <Card.Body>
                            Survey Submitted!
                        </Card.Body>
                    </Card>
                </Form>
            }

        </Page>

    )
}

export default TakeSurvey;