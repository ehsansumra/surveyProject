const Sequelize = require("sequelize");
const sequelize = require("../database");
const Answer = require("./answer");
const Submission = require("./submission");
const Survey = require("./survey");

const Question = sequelize.define("question", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    question: {
        type: Sequelize.STRING,
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    index: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
});

Question.hasMany(Answer);
Question.hasMany(Submission);

module.exports = Question;