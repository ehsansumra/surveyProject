const Sequelize = require("sequelize");
const sequelize = require("../database");
const Question = require("./question");

const Survey = sequelize.define("survey", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    }
});

Survey.hasMany(Question);
module.exports = Survey;