const sequelize = require("./database");

const Survey = require("./models/survey");
const Question = require("./models/question");
const Answer = require("./models/answer");

Survey.hasMany(Question);
Question.hasMany(Answer);

/*
questionData = {
    id: "",
    question:"",
    answers: ["", "", ""],
    type: "",
}
*/
const createSurveyAnswers = (question, questionData) => {
    let idx = 0;
    questionData.answers.forEach(answer => {
        question.createAnswer({ text: answer, index: idx });
        idx++;
    })
}

const createSurveyQuestion = (survey, questionData) => {
    return survey.createQuestion({
        question: questionData.question,
        type: questionData.type,
        index: questionData.id,
    })
}

const createSurvey = (surveyData) => {
    sequelize
        .sync()
        .then(result => {return Survey.create();})
        .then(survey => {
            surveyData.forEach(testQuestion => {
                createSurveyQuestion(survey, testQuestion)
                    .then(question => {
                        createSurveyAnswers(question, testQuestion);
                    })
                    .catch(err => console.log(err))
            });
        })
        .catch(err => console.log(err))
}

module.exports = createSurvey;
