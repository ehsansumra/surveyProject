import React, { useState, useEffect } from "react";
import ConstructSurveyQuestion from "../components/ConstructSurveyQuestion";
import SurveyTakerDataHook from "../hooks/SurveyTakerDataHook";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Page from '../components/Page';
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
                setSurveyData(resSurveyData);
                const newArr = resSurveyData.map(question => {
                    return {
                        id: question.id,
                        type: question.type,
                        answers: [],
                    }
                })

                completedSurveyData = newArr;

                const answersArr = newArr.map(question => (
                    question.answers
                ))

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

    const handleSurveySubmit = () => {
        console.log("Survey submitted")
        console.log(answerInputs)
    }

    return (
        <Page>
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
                            id={question.id} />))
                    : "No data received"

            }
            {/* <Card></Card> */}
            <Link to="../create_survey"><Button variant="outline-light" className="create-button">Create Survey</Button></Link>
            <Button onClick={handleSurveySubmit} variant="outline-light" className='create-button'>Submit</Button>
        </Form>
        
        </Page>

    )
}

export default TakeSurvey;