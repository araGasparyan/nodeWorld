var querystring = require("querystring");
var db = require("../model/db/ConecctDB.js");
var checkers = require("../model/validation/Checkers.js");
var matchers = require("../model/validation/Matchers.js");
var genHTML = require("../model/formatter/generateHTML.js");
var url=require('url');


var suggestion=function(req, res){
    if(req.session.successLogin){
    //input is the exppresion after ?    
    //var input = (url.parse(req.url)).search;
    //input is an array from parametrs
    var input=req.param('region');
   
    
//    res.redirect("/country/"+input.substr(input.indexOf('=')+1));
        res.render("suggestion", {
            title: "suggestion",
            onHeader: input
        });
    } else {
       res.redirect("/");
    }
    
};



//exports
module.exports.suggestion = suggestion;


