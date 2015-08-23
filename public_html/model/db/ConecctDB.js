var mysql = require('mysql');


//The following variables incapsulates connection parametrs to a database
var ip='109.75.36.10'; 
var user='user1';
var password='ca8e4957a6';
var database='world';
var con;
//The variables incapsulates queris and results of the database
var sql;
var result;

//The function creates connection to the database
exports.connectDB=function() {
var con = mysql.createConnection({
  host     : ip,
  user     : user,
  password : password,
  database : database
});
return con;
}

