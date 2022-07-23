const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

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

]

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/api/take_survey', (req, res) => {
    res.json(testData);
});