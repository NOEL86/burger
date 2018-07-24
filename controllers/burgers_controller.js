var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

// 4. Create the `router` for the app, and export the `router` at the end of your file.

// start at the index file
router.get('/', function (req, res) {
    res.redirect('/index');
});


// use the selectAll function in orm file using burger data
router.get('/index', function (req, res) {
    burger.selectAll(function (data) {
        var object = { burgers: data };
        console.log(object);
        res.render('index', object);
    });
});

// Create a new burger using orm function and the users inputted data
router.post('/burger/create', function (req, res) {
    burger.insertOne(req.body.burger_name, function () {
        res.redirect('/index');
    });
});

// delete/eat a burger and update the screen using orm and user selection
router.post('/burger/eat/:id', function (req, res) {
    burger.updateOne(req.params.id, function () {
        res.redirect('/index');
    });
});

module.exports = router
