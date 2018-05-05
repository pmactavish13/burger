require("dotenv").config();

var mysql = require("mysql");

// ************************* CONNECT TO MYSQL *************************
var connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

connection.connect(function (err) {
    if (err) {
        console.log("Error connecting: " + err);
    } else {
        console.log("connectedas id " + connection.threadId);
    };
});

module.exports = connection;