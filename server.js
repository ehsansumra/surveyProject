const express = require("express");
const app = express();
const db = require('./database');
const createSurvey = require('./index');
const getSurvey = require('./getSurvey');
const submitSurvey = require('./submitSurvey');
const allSurveys = require("./allSurveys");
const getResults = require('./getResults');

const port = process.env.PORT || 5000;

app.use(express.json());

// make routes and clean up this mess
app.get('/api/take_survey/:surveyId', async (req, res) => {
    const result = await getSurvey(req.params.surveyId);
    console.log("result", result)
    res.json(result);
});

app.get('/api/results/:surveyId', async (req, res) => {
    const results = await getResults(req.params.surveyId)
    console.log(" RESULTS --------------", results)
    res.send(results)
})

app.get('/api/surveyid', async (req, res) => {
    console.log("surveyId hit")
    
    const result = [
        {
            ids: await allSurveys()
        }
    ]
    
    res.json(result);
});

app.post('/api/survey', async (req, res) => {
    let surveyData = req.body
    const id = await createSurvey(surveyData);
    res.send(id.toString());
});

app.post('/api/complete_survey', async (req, res) => {
    const surveyData = req.body;
    console.log("completed survey",surveyData)
    await submitSurvey(surveyData);
    res.sendStatus(200);
})

app.listen(port, () => console.log(`Listening on port ${port}`));