import React, { useState, useEffect } from "react";
import ConstructSurveyQuestion from "./ConstructSurveyQuestion";
import SurveyTakerDataHook from "../hooks/SurveyTakerDataHook";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

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

    const {
        initializeAnswerInputs,
        updateCheckBoxes,
        updateRadioButtons,
        updateOpenEnded,
        answerInputs
    } = SurveyTakerDataHook();
    let completedSurveyData = null; //this will be updated at final submission

    useEffect(() => {
        fetch("/api/take_survey")
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
    }

    return (
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
            <Button onClick={handleSurveySubmit} variant="outline-light" className='create-button'>Submit</Button>
        </Form>


    )
}

export default TakeSurvey;