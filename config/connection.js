require("dotenv").config();

var mysql = require("mysql");
var connection;
// ************************* CONNECT TO MYSQL *************************
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {

    connection = mysql.createConnection({
        host: process.env.MYSQL_HOST,
        port: process.env.MYSQL_PORT,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE
    });
};

connection.connect(function (err) {
    if (err) {
        console.log("Error connecting: " + err);
    } else {
        console.log("connectedas id " + connection.threadId);
    };
});

module.exports = connection;