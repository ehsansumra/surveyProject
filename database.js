const mysql = require('mysql2');

module.exports = mysql.createConnection({
    host: 'localhost',
    user: 'local_user',
    password: 'password',
    database: 'test-project-db',
})