var orm = require('../config/orm.js');

var burger = {
    selectAll: function (cb) {
        orm.selectAll('burgers', function (res) {
            cb(res);
        })
    },

    updateOne: function (id, cb) {
        orm.updateOne('burgers', id, cb);
    },

    insertOne: function (name, cb) {
        orm.insertOne('burgers', name, cb);
    }

}


// * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

//     * Export at the end of the `burger.js` file.
// AKA click functions
// $("#eat").on("submit", function (event) {
//     event.preventDefault();
//     var burgerInfo = $("#burger").val().trim();

//     console.log(burgerInfo);

//     $.ajax({
//         method: "PUT",
//         url: "/burger/eat" + burgerInfo,

//     }).then(function (data) {
//         console.log(data)
//     })
// })

// $("#add").on("click", function (event) {
//     event.preventDefault();
//     var entry = $("#form").val().trim();
//     console.log(entry);


// })




module.exports = burger;