var querystring = require("querystring");
var db = require("../model/db/ConecctDB.js");
var checkers = require("../model/validation/Checkers.js");




var country=function(req, res){
    if(req.session.successLogin){
    res.render("country", {
       title: "My First Node Hello World!!!",
       onHeader: "Hello World!!!"
    });
    } else {
       res.redirect("/");
    }
};


//exports
module.exports.country = country;
