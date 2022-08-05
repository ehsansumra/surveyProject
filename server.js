const express = require("express");
const app = express();
const db = require('./database');
const createSurvey = require('./index');
const getSurvey = require('./getSurvey');
const port = process.env.PORT || 5000;

app.use(express.json());

app.get('/api/take_survey/:surveyId', async (req, res) => {
    const result = await getSurvey(req.params.surveyId);
    console.log("result", result)
    res.json(result);
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