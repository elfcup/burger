// -- ||     ||  ||        |||\\      //\\     ||\\   ||  ||       
// -- ||     ||  ||        ||  \\    //  \\    || \\  ||  ||       
// -- |||||||||  ||        ||  ||   //||||\\   ||  \\ ||  ||       
// -- ||     ||  ||        ||  //  /|      |\  ||   \\||  ||       
// -- ||     ||  ||        |||//   ||      ||  ||    \||  || 



  //  /||\   ||   //||\\   /||\   ||    ||  |||\\
  // //  \\  ||  /|       //  \\  ||    ||  ||  |\
  // ||||||  ||  ||||||   ||      ||    ||  |||///
  // \\      ||  ||       \\  //  \\    //  ||
  //  \||/   ||  ||        \||/    \\||//   ||

const mysql = require("mysql");

// const connection = mysql.createConnection({
//     port: 3306,
//     host: "localhost",
//     user: "root",
//     password: "NeptunePluto101",
//     database: "burgers_db"
// });


const connection = mysql.createConnection({
    port: 3306,
    host: "e764qqay0xlsc4cz.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "m109mxkzfcwxpxjv",
    password: "a4420yarpnhkvmyz",
    database: "axezms6mtacks9wj"
});








connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;


