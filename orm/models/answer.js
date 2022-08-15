const Sequelize = require("sequelize");
const sequelize = require("../database");
const Question = require("./question");

const Answer = sequelize.define("answer", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    text: {
        type: Sequelize.STRING,
    },
    index: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
});

module.exports = Answer;