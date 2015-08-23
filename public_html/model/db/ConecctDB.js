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

//The function checks login and password of the user
exports.checkLogin = function(login,password) {
var con = connectDB();
con.connect();
con.query("SELECT * FROM users where login='"+login+"' AND password='"+password+"';", function(err, rows, fields) {
if (!err){
    return rows;
}
else{
    throw new Error(err);
}
});
con.end();
};




//module.exports = ConnectDB;
