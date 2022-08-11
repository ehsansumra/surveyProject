const sequelize = require("./database");

const Survey = require("./models/survey");

const allSurveys = async () => {
    const res = await Survey.findAll();
    const ids = res.map(survey => {
        return survey.dataValues.id
    })
    console.log(ids);
}

module.exports = allSurveys;