var connection = require('./connection.js');

// * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

// * `selectAll()`
// * `insertOne()`
// * `updateOne()`

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

function objToSql(ob) {
    var arr = [];

    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
            // e.g. {sleepy: true} => ["sleepy=true"]
            arr.push(key + "=" + value);
        }
    }

    // translate array of strings to a single comma-separated string
    return arr.toString();
}


var orm = {

    selectAll: function (tableInput, cb) {
        var queryString = " SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) { throw err };
            console.log(result);
            cb(result);
        });
    },

    insertOne: function (tableInput, col, val, cb) {
        var queryString = "INSERT INTO" + tableInput;

        queryString += " (";
        queryString += col.toString();
        queryString += ") ";
        queryString += val + "(";
        queryString += printQuestionMarks(val.length);
        queryString += ") ";

        console.log(queryString);
        connection.query(queryString, val, function (err, res) {
            if (err) { throw err };
            cb(res);
        })
    },

    updateOne: function (tableInput, col, val, cb) {
        var queryString = "UPDATE" + tableInput;

        queryString += " SET ";
        queryString += objToSql(col);
        queryString += " WHERE ";
        queryString += val;

        console.log(queryString);

        connection.query(queryString, function (err, res) {
            if (err) { throw err };
            cb(res);
        })
    }

};

module.exports = orm