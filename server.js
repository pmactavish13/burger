var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

var app = express();
var PORT = process.env.PORT || 5000;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// handlebars rout to static files - css, img
app.use(express.static('public'));

// use bodyParser to translate data
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// set-up screen with html/css
// app.get('/', function(req, res) {
//     res.render("index")
// });
//**************************************/
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "burgers_db"
  });
  
  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
  
    console.log("connected as id " + connection.threadId);
  });
  
  // Root get route
  
  //var routes = require('./controllers/burgers_controller.js')
  app.get("/", function(req, res) {
    connection.query("SELECT * FROM burgers;", function(err, data) {
      if (err) throw err;
      res.render("index", { burgers: data });
    });
  });
  
  // Post route -> back to home
  app.post("/", function(req, res) {
    connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [req.body.burger_name], function(err, result) {
      if (err) throw err;
        console.log("in post server.js")
      res.redirect("/");
    });
  });
//***************************************** */


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  