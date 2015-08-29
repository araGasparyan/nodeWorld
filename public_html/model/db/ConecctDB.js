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

////The function creates connection to the database
//exports.connectDB=function() {
//var con = mysql.createConnection({
//  host     : ip,
//  user     : user,
//  password : password,
//  database : database
//});
//return con;
//};

//The function creates connection to the database
var connectDB=function() {
var con = mysql.createConnection({
  host     : ip,
  user     : user,
  password : password,
  database : database,
  //the following property does not allow to execute multiple queries
  mulitipleStatments: false,
  charset: 'utf8'
});
return con;
};

 //The function checks login and password of the user
 exports.checkLogin=function(login, password, callback){
    var con = connectDB();
    con.connect();
    //check login and password of the user
    con.query("SELECT * FROM users where login=? AND password= ?", [login,password], function(err, rows, fields) {
        if (!err){
        callback(rows);
        }
        else{
        throw new Error(err);
        }
        });
    con.end();
  };
  
  
   //The function returns mysql query-result of the attributes of the country, and after returning it starts
   //callback function
   exports.getCountryInfo=function(countryName,callback){
   var con = connectDB();
   con.connect();
   //check login and password of the user
   con.query("SELECT `Continent`, `Region`, `SurfaceArea`, `IndepYear`, `country`.`Population`, `LifeExpectancy`,"+
           " `LocalName`, `GovernmentForm`, `HeadOfState`, city.`Name` AS capital  FROM `world`.`country` LEFT JOIN"+
           " world.`city` ON city.`CountryCode`=`country`.`Code` Where (city.`ID` = `country`.`Capital`"+
           " OR ISNULL(city.`ID`)) AND `country`.`Name` = ?", countryName, function(err, rows, fields) {
        if (!err){
        callback(rows);
        }
        else{
        throw new Error(err);
        }
        });
    con.end();
  };
  
  
   //The method returns mysql query-result of the languages of the country
   exports.getLanguage=function(countryName,callback){
   var con = connectDB();
   con.connect();
   //check login and password of the user
   con.query("Select `Language`, `IsOfficial`, `Percentage` FROM countrylanguage, country WHERE countrylanguage.CountryCode=country.Code AND `country`.`Name`='"+countryName+"' order by `Percentage` DESC;", countryName, function(err, rows, fields) {
        if (!err){
        callback(rows);
        }
        else{
        throw new Error(err);
        }
        });
    con.end();
  };
  
  
  //The method returns mysql query-result of the cities of the country
   exports.getCities=function(countryName,callback){
   var con = connectDB();
   con.connect();
   //check login and password of the user
   con.query("SELECT `city`.`Name`, District, `city`.`Population`  FROM city,country WHERE city.CountryCode=country.Code AND `country`.`Name`='"+countryName+"' order by `city`.`Name`;", countryName, function(err, rows, fields) {
        if (!err){
        callback(rows);
        }
        else{
        throw new Error(err);
        }
        });
    con.end();
  };
  
  
   
   
   
   
     
   //The function is created for tests
   exports.test=function(countryName,callback){
   var con = connectDB();
   con.connect();
   //check login and password of the user
   con.query("SELECT * FROM `world`.`country` Where `country`.`Name` = ?", countryName, function(err, rows, fields) {
        if (!err){
            console.log(rows);
        callback(rows);
        }
        else{
        throw new Error(err);
        }
        });
    con.end();
  };

