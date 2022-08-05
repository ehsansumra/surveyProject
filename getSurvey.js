const sequelize = require("./database");

const Survey = require("./models/survey");
const Question = require("./models/question");
const Answer = require("./models/answer");

Survey.hasMany(Question);
Question.hasMany(Answer);

const selectQuestions = async (id) => {
    const questions = await Question.findAll({
        attributes: ["id", "question", "type", "index"],
        where: { surveyId: id },
    })

    // console.log(JSON.stringify(questions, null, 2))
    return questions

}

const selectAnswers = async (qId) => {
    const answers = await Answer.findAll({ where: { questionId: qId } })
    let answersArr = [];

    answers.forEach(answer => {
        answersArr.push(answer.dataValues.text);
    })

    return answersArr
}

const constructSurveyData = async (id) => {
    const q = await selectQuestions(id);
    const surveyData = new Array(q.length).fill(null);

    for (let i = 0; i < q.length; i++) {
        let questionData = q[i].dataValues;

        let questionIdx = questionData.index;

        if (questionData.type !== "Open Ended") {
            answers = await selectAnswers(questionData.id)
            questionData.answers = answers;
        }

        surveyData[questionIdx] = questionData;
    }
    return surveyData;
}

const getSurvey = async(id) => {
    let data = await constructSurveyData(id);
    return data;
}

module.exports = getSurvey;