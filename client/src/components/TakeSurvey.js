import React, { useState } from "react";
import ConstructSurveyQuestion from "./ConstructSurveyQuestion";
import Card from "react-bootstrap/Card";

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
    const testData = [
        {
            id: 0,
            question: "What is 9 + 10?",
            answers: ["910", "21", "19"],
            type: "Multiple Choice"
        },
        {
            id: 1,
            question: "Check all that apply",
            answers: ["Option 1", "Option 2", "Option 3"],
            type: "Check Boxes"
        },
        {
            id: 2,
            question: "Write an essay",
            answers: [],
            type: "Open Ended"
        },
        {
            id: 3,
            question: "What is 9 + 10?",
            answers: ["910", "21", "19"],
            type: "Multiple Choice"
        },
    ]

    // output answer data on submit.
    const answerData = {
        //TODO i left off here
    }
    return (
        <div class="main-content">
            {testData.map((data, i) => <ConstructSurveyQuestion key={i} data={data} id={data.id} />)}
            <Card></Card>
        </div>

    )
}

export default TakeSurvey;