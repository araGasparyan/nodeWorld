var db = require("../model/db/ConecctDB.js");
var checkers = require("../model/validation/Checkers.js");
var matchers = require("../model/validation/Matchers.js");
var genHTML = require("../model/formatter/generateHTML.js");
var url=require('url');




var govFormListJSON=function(req, res){
    if(req.session.successLogin){
    var limit = 7;
    var letter = req.query.q;
    console.log(letter);
    
     //console.log(req._parsedUrl);
    db.getCountriesWithLetter(letter, limit, function(rows){
        var countries = [];
        for(var i in rows){
            countries.push(rows[i]["Name"]);
        }
        res.render("govFormListJSON", {
            suggestions: countries
        });
    });
    } else {
       res.redirect("/");
    }
    
};



//exports
module.exports.govFormListJSON = govFormListJSON;