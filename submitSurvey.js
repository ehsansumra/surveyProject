const sequelize = require("./database");

const Survey = require("./models/survey");
const Question = require("./models/question");
const Answer = require("./models/answer");
const Submission = require("./models/submission");

const createSubmission = (submission) => {
    if (!submission) return;

    submission.data.forEach(submissionText => {
        Submission.create({
            text: submissionText,
            questionId: submission.questionId,
        })
    })
}

const submitSurvey = async (submissionData) => {
    if (!submissionData) {
        console.log("no submission data");
        return;
    }
    console.log("this is the data", submissionData)
    sequelize.sync()
        .then(res => {
            let index = 0;
            submissionData.forEach(submission => {
                createSubmission(submission);
                index++;
            })
        })
}

module.exports = submitSurvey;