var connection = require('./connection');

// * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

// * `selectAll()`
// * `insertOne()`
// * `updateOne()`


var orm = {

    selectWhere: function (whatToSelect, tableInput) {
        var queryString = "SELECT ?? FROM ??";
        connection.query(queryString, [whatToSelect, tableInput], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },

    insertOne: function () {
        var queryString = "INSERT INTO burgers SET ?? WHERE ?? = ?";
        connection.query(queryString, [], function (err, res) {
            if (err) throw err;

        })
    },

    updateOne: function () {
        var queryString = "UPDATE burgers SET ?? WHERE ??"
    }










};

module.exports = orm