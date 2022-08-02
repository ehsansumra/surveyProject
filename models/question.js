const Sequelize = require("sequelize");
const sequelize = require("../database");

const Question = sequelize.define("question", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: true,
        autoIncrement: true,
    },
    text: {
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

module.exports = Question;