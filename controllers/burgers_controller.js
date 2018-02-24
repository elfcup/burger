var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");


// , will show all of the burgers
router.get("/", function(req, res) {
	burger.selectAll(function(burgerData) {
		res.render("index", { burgers: burgerData });
	});
});

// Create a new burger
router.post("/burger/create", function(req, res) {
	burger.insertOne(req.body.burger_name, function(burgerData) {
		res.redirect("/");
	});
});

// Devour a Burger
router.put("/burger/eat/:id", function(req, res) {
	burger.updateOne(req.params.id, function(burgerData) {
		res.redirect("/");
	});
});

module.exports = router