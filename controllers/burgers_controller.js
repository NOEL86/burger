var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');


// 4. Create the `router` for the app, and export the `router` at the end of your file.

// start at the index file

router.get('/', function (req, res) {
    burger.selectAll(function (burgers) {
        // console.log(burgers);
        res.render('index', { burgers });
    })

});


// use the selectAll function in orm file using burger data

// Create a new burger using orm function and the users inputted data

router.post('/burgers/create', function (req, res) {
    burger.insertOne(req.body.burger_name, function (result) {
        res.redirect('/');
    })
});


// eat a burger and update the screen using orm and user selection
router.put('/burgers/:id', function (req, res) {
    //result. changed rows??
    burger.updateOne(req.body.burger_id, function (err, result) {
        if (err) throw err + "you cannot eat a burger";
        console.log(result);
        res.redirect('/');
    });

});


module.exports = router;
