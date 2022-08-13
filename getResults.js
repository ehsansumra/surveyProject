const sequelize = require("./database");

const Survey = require("./models/survey");
const Question = require("./models/question");
const Answer = require("./models/answer");
const Submission = require("./models/submission");

const getSurvey = require("./getSurvey");

const helper = async(id) => {
    const survey = await getSurvey(id)
    for (let i = 0; i < survey.length; i++) {
        const question = survey[i];
        let total = 0;

        if (question.type === "Open Ended") continue;

        temp =  await Submission.findAll({
            where: {questionId: question.id}
        })
        
        
        let submissions = new Array(question.answers.length).fill(0);
        
        for (submission of temp) {
            const index = parseInt(submission.dataValues.text);
            if (question.answers[index]) {
                submissions[index] += 1;
                total += 1;
            }
        }

        question.submissions = submissions;
        question.total = total;
    }
    
    return survey;
}

const getResults = async (id) => {
    const data = await sequelize.sync()
    .then(result => {
        return helper(id)
    })
    console.log(data);
    return data
}

getResults(7);
module.exports = getResults;
