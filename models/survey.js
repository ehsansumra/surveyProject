const Sequelize = require("sequelize");
const sequelize = require("../database");

const Survey = sequelize.define("survey", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: true,
        autoIncrement: true,
    }
});

module.exports = Survey;