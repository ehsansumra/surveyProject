const express = require("express");
const app = express();
const db = require('./database');
const createSurvey = require('./index');
const port = process.env.PORT || 5000;

let testData = [
    {
        id: 0,
        question: "What is 9 + 000?",
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

]
app.use(express.json());


app.get('/api/take_survey', (req, res) => {
    res.json(testData);
});

app.post('/api/survey', (req, res) => {
    let surveyData = req.body
    createSurvey(surveyData);
    res.send(" you got me")
});

app.post('/api/complete_survey', (req, res) => {
    const surveyData = req.body;
    console.log(surveyData)
})

app.listen(port, () => console.log(`Listening on port ${port}`));