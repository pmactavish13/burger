var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.

// get all data from table
router.get("/", function (req, res) {
  burger.all(function (data) {
    var hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

// add new data - burger
router.post("/api/burgers", function (req, res) {
  burger.create(["burger_name"], [req.body.burger_name], function (result) {
    // Send back the ID of the new "data"
    res.json({ id: result.insertId });
  });
});

// change existing data - devoured
router.put("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;
  burger.update(
    {
      devoured: req.body.devoured
    },
    condition,
    function (result) {
      if (result.changedRows === 0) {
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

// Export routes for server.js to use.
module.exports = router;