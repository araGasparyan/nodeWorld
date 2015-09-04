var db = require("../model/db/ConecctDB.js");
var checkers = require("../model/validation/Checkers.js");
var matchers = require("../model/validation/Matchers.js");
var genHTML = require("../model/formatter/generateHTML.js");
var url=require('url');

var fillSuggestionsIntoArray = function(rows, fieldName){
    var suggestions = [];
    for(var i in rows){
        suggestions.push(rows[i][fieldName]);
    }
    return suggestions;
};


var countryList = function(req, res){
    if(req.session.successLogin){
    var limit = 7;
    var letter = req.query.q;
    //console.log(req._parsedUrl);
    db.getCountriesWithLetter(letter, limit, function(rows){
        var countries = fillSuggestionsIntoArray(rows,"Name");
        res.render("ajax/countryList", {
            suggestions: countries
        });
    });
    } else {
        res.redirect("/");
    }
    
};

var govFormList = function(req, res){
    if(req.session.successLogin){
    var limit = 3;
    var letter = req.query.q;
    //console.log(req._parsedUrl);
    db.getGovFormsWithLetter(letter, limit, function(rows){
        var govForms = fillSuggestionsIntoArray(rows,"GovernmentForm");
        res.render("ajax/govFormList", {
            suggestions: govForms
        });
    });
    } else {
        res.redirect("/");
    }
    
};

var regionList = function(req, res){
    if(req.session.successLogin){
    var limit = 3;
    var letter = req.query.q;
    var continent = req.query.c;
    //console.log(req._parsedUrl);
    db.getRegionsWithLetter(letter, limit, continent, function(rows){
        var regions = fillSuggestionsIntoArray(rows,"Region");
        res.render("ajax/regionList", {
            suggestions: regions
        });
    });
    } else {
        res.redirect("/");
    }
    
};



//exports
module.exports.countryList = countryList;
module.exports.govFormList = govFormList;
module.exports.regionList = regionList;