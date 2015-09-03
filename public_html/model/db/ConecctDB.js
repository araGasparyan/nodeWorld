var mysql = require('mysql');
var matchers = require("../validation/Matchers.js");


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
   con.query("Select `Language`, `IsOfficial`, `Percentage` FROM countrylanguage, country WHERE countrylanguage.CountryCode=country.Code AND `country`.`Name` = ? order by `Percentage` DESC;", countryName, function(err, rows, fields) {
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
   con.query("SELECT `city`.`Name`, District, `city`.`Population`  FROM city,country WHERE city.CountryCode=country.Code AND `country`.`Name`= ? order by `city`.`Name`;", countryName, function(err, rows, fields) {
        if (!err){
        callback(rows);
        }
        else{
        throw new Error(err);
        }
        });
    con.end();
  };
  
  
   
   
   
    //The method returns json - which is an array of first (by alphavite) limit countries which begin with letter letter 
    exports.getCountriesWithLetter=function(letter,limit,callback){
    var con = connectDB();
    con.connect();
    if(letter!==""){
    letter=letter+'%';
    }

    con.query("SELECT `country`.`Name` FROM country WHERE `country`.`Name` LIKE ? ORDER BY `country`.`Name` LIMIT ?;",[letter,limit], function(err, rows, fields) {
        if (!err){
        callback(rows);
        }
        else{
        throw new Error(err);
        }
        });
    con.end();
    }; 




   //The method returns json - which is an array of first (by alphavite) limit regions which begin with letter letter
   //The function searches only in the current continent
    exports.getRegionsWithLetter=function(letter,limit,continent,callback){
    var con = connectDB();
    con.connect();
    var continentName=matchers.matchContinentName(continent);
    if(letter!==""){
    letter=letter+'%';
    }
    con.query("SELECT `country`.`Region` FROM country WHERE `country`.`Region` LIKE ? AND `country`.`Continent` LIKE ? GROUP BY `country`.`Region` ORDER BY `country`.`Region` LIMIT ?;",[letter,continentName,limit], function(err, rows, fields) {
        if (!err){
        callback(rows);
        }
        else{
        throw new Error(err);
        }
        });
    con.end();
    }; 
    

       
    
   //function returns array of first (by alphavite) limit goverment forms which begin with letter letter
    exports.getGovFormsWithLetter=function(letter,limit,callback){
    var con = connectDB();
    con.connect();
    if(letter!==""){
    letter=letter+'%';
    }
    con.query("SELECT `country`.`GovernmentForm` FROM country WHERE `country`.`GovernmentForm` LIKE ? GROUP BY `country`.`GovernmentForm` ORDER BY `country`.`GovernmentForm` LIMIT ? ;",[letter,limit], function(err, rows, fields) {
        if (!err){
        callback(rows);
        }
        else{
        throw new Error(err);
        }
        });
    con.end();
    }; 
   
   
    //The method returns json - which is an array of countries, whiche were searched by the user in advanced search form
    exports.findOrderedCountries=function(continent, region, surface_min, surface_max, population_min, population_max, life_expectancy, government_form, city_count, languages, callback){
    var con = connectDB();
    con.connect();
    var lifeExpStatment = matchers.matchLifeExpectancyStatement(life_expectancy);
    continent=matchers.matchContinentName(continent);
    if(region===""){
       region="%";
    }
    if(surface_min===""){
       surface_min="-1";
    }
    if(surface_max===""){
       surface_max="9000000000";
    }
    if(population_min===""){
       population_min=-1;
    }
    if(population_max===""){
       population_max="9000000000";
    }
    if(government_form===""){
       government_form="%";
    }
    if(city_count===""){
       city_count="-1";
    }
    con.query("SELECT country.`Name` "+
            "FROM `country` "+
            "LEFT JOIN `countrylanguage` ON `country`.`Code`=`countrylanguage`.`CountryCode` LEFT JOIN"+
            " (SELECT COUNT(city.`CountryCode`) AS cityCount, country.`Code` AS CountryCode FROM"+
            " `country` LEFT JOIN `city` ON `country`.`Code` = `city`.`CountryCode`"+
            " GROUP BY `country`.`Code`) AS tmp"+
            " ON `country`.`Code`=tmp.CountryCode"+
            " where `country`.`Continent` LIKE ? AND `country`.`Region` LIKE ? AND `country`.`GovernmentForm` LIKE ?"+
            lifeExpStatment+
            " AND `country`.`Population`>=? AND country.`Population`<= ?"+
            " AND `country`.`SurfaceArea` >= ? AND `country`.`SurfaceArea` <=? "+
            "AND cityCount>= ?"+
            " GROUP BY country.`Name` order by country.`Name`;",[continent, region, government_form, population_min, population_max, surface_min, surface_max, city_count, languages], function(err, rows, fields) {
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

