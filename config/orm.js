// import { callbackify } from 'util';

var connection = require('./connection.js');

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        arr.push(key + "=" + ob[key]);
    }

    return arr.toString();
}

var orm = {
    selectAll: function (tableInput, callBack) {
        var queryString = "SELECT * FROM " + tableInput + ";";

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            callBack(result);
        });
    },

    insertOne: function (table, cols, vals, callBack) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }

            callBack(result);
        });
    },

    updateOne: function (table, objColVals, condition, callBack) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            callBack(result);
        });
    }
};

module.exports = orm;





// var connection = require("./connection.js");

// var orm = {
//     selectAll: function(tableInput, callBack) {
//         var query = "SELECT * FROM " + tableInput + ";";

//         connection.query(query, function(err, result) {
//             if (err) {
//                 throw err;
//             }
//             callBack(result);
//         });
//     },

    // insertOne: function(tableInput, callBack) {
    //     var query = "INSERT";
    //     connection.query(query, function(err, result) {
    //         if (err) {
    //             throw err;
    //         }
    //         callBack(result);
    //     });
    // },

    // updateOne: function(tableInput, callBack) {
    //     var query = "UPDATE";
    //     connection.query(query, function(err, result) {
    //         if (err) {
    //             throw err;
    //         }
    //         callBack(result);
    //     });
    // },

// };


// const orm = {
//   selectAll: function(table, callBack) {
//     const query = 'SELECT * FROM ??';
//     connection.query(query, [table], function(err, result) {
//       // this callback was passed all the way from the controller, through the model
//       callBack(err, result);
//     })
//   },
//   insertInto: function(table, columns, values, onResult) {
//     const query = "INSERT INTO ?? (??) VALUES (?)";
//     connection.query(query, [table, columns, values] , function(err, result) {
//       // now we pass the result back in our callback
//       console.log(err)
//       onResult(err, result);
//     })
//   },
//   update: function(table, column, value, id, onResult) {
//     const query = 'UPDATE ?? SET ?? = ? WHERE id = ?'
//     connection.query(query, [table, column, value, id], function(err, result) {
//       console.log(err)
//       onResult(err, result);
//     })
//   },



// module.exports = orm;