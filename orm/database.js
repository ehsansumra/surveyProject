const Sequelize = require("sequelize");

const sequelize = new Sequelize("test-project-db", "local_user", "password", {
    dialect: "mysql",
    host: "localhost",
});

module.exports = sequelize;