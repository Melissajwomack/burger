//dependencies
var express = require("express");

//grab burger model that calls orm functions
var burger = require("../models/burger.js");

//grab express router
var router = express.Router();

//get route for main index page 
router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    var hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

//post route to create new burger
router.post("/api/burgers", function (req, res) {
  burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function (result) {
      res.json({ id: result.insertId });
    });
});

//put route to change burger from devoured=true to devoured=false
router.put("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;
  burger.updateOne({
    devoured: req.body.devoured
  }, condition, function (result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

//export routers
module.exports = router;