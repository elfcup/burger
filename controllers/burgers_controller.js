const express = require('express');
const router = express.Router();

const burger = require('../models/burger.js');

router.get('/', function (req, res) {
	burger.selectAll(function (data) {
		var hbsObject = {
			burgers: data
		};
		res.render('index', hbsObject);
	});
});

router.post('/burgers', function (req, res) {
	burger.insertOne([
		'burger_name'
	], [
			req.body.burger_name
		], function (data) {
			console.log(data);
			res.redirect('/');
		});
});

router.put('/burgers/:id', function (req, res) {
	var condition = 'id = ' + req.params.id;

	burger.updateOne({
		devoured: true
	}, condition, function (data) {
		res.redirect('/');
	});
});

module.exports = router;






// var express = require("express");
// var router = express.Router();
// var burger = require("../models/burger.js");

// router.get('/', function (req, res) {
// 	burger.selectAll(function (data) {
// 		var hbsObject = {
// 			burgers: data
// 		};
// 		res.render('index', hbsObject);
// 	});
// });

// router.post('/burgers', function (req, res) {
// 	burger.insertOne([
// 		'burger_name'
// 	], [
// 			req.body.burger_name
// 		], function (data) {
// 			res.redirect('/');
// 		});
// });

// router.put('/burgers/:id', function (req, res) {
// 	var condition = 'id = ' + req.params.id;

// 	burger.updateOne({
// 		devoured: true
// 	}, condition, function (data) {
// 		res.redirect('/');
// 	});
// });

// module.exports = router;










// , will show all of the burgers
// router.get("/", function(req, res) {
// 	burger.selectAll(function(burgerData) {
// 		res.render("index", { burgers: burgerData });
// 	});
// });

// Create a new burger
// router.post("/burger/create", function(req, res) {
// 	burger.insertOne(req.body.burger_name, function(burgerData) {
// 		res.redirect("/");
// 	});
// });

// Devour a Burger
// router.put("/burger/eat/:id", function(req, res) {
// 	burger.updateOne(req.params.id, function(burgerData) {
// 		res.redirect("/");
// 	});
// });

// module.exports = router