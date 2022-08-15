const Sequelize = require("sequelize");
const sequelize = require("../database");
const Question = require("./question");

const Submission = sequelize.define("submission", {
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
    }
});


module.exports = Submission;