var querystring = require("querystring");
var db = require("../model/db/ConecctDB.js");
var checkers = require("../model/validation/Checkers.js");




var country=function(req, res){
    if(req.session.successLogin){
    //This explains how :/something works, req params contains many parametrs including something
    //and in our if statments every param is checked in if block (else if always will work)
    /*  
    console.log(req.params.countryId);
    if(req.params.countryId==='aaa'){
        console.log('wow');
    }else if(req.params.countryId==='formstyle.css'){
        console.log('It is good');
    }
    */
   
//   var countryId = req.url.replace("/", "");
//   if(countryId.length > 0) {
//   console.log(countryId);
//   }
//        db.getCountryInfo(query.userName, query.password, function(rows){
//        
//        });

console.log(req.params.countryId);
console.log(req.url);
    res.render("country.ejs", {
       title: "My First Node Hello World!!!",
       onHeader: "Hello World!!!"
    });
    } else {
       res.redirect("/");
    }
    
};


//exports
module.exports.country = country;
