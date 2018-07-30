var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');


// 4. Create the `router` for the app, and export the `router` at the end of your file.

// start at the index file

router.get('/', function (req, res) {
    burger.selectAll(function (burgers) {
        console.log(burgers);
        res.render('index', { burgers });
    })

});


// use the selectAll function in orm file using burger data

// Create a new burger using orm function and the users inputted data

router.post('/burger/create', function (req, result) {
    orm.insertOne([req.body.burger_name, req.body.devoured], function (data) {
        res.json({ id: result.insertId });
        res.render(data);
    });
});

// eat a burger and update the screen using orm and user selection
router.put('/burgers/update', function (req, res) {

    //result. changed rows??
    burger.updateOne(req.body.burger_id, function (result) {
        console.log(result);
        res.redirect('/');
    });

});
//understand what's going on in req.body and find the id and reference it directly
//update
module.exports = router;
