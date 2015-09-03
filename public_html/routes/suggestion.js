var querystring = require("querystring");
var db = require("../model/db/ConecctDB.js");
var checkers = require("../model/validation/Checkers.js");
var matchers = require("../model/validation/Matchers.js");
var genHTML = require("../model/formatter/generateHTML.js");
var url=require('url');



var suggestion=function(req, res){
    if(req.session.successLogin){
       
    var region=req.query.region;
    var continent=req.query.continent;
    var surface_min=req.query.surface_min;
    var surface_max=req.query.surface_max;
    var population_min=req.query.population_min;
    var population_max=req.query.population_max;
    var life_expectancy=req.query.life_expectancy;
    var government_form=req.query.government_form;
    var city_count=req.query.city_count;
    var languages;
    //console.log(req._parsedUrl);
    db.findOrderedCountries(continent, region, surface_min, surface_max, population_min, population_max, life_expectancy, government_form, city_count, languages, function(rows){
        rows=genHTML.generateList(rows,'/country/');
        res.render("suggestion", {
            title: "suggestion",
            onHeader: "Your order!!",
            suggestions: rows
        });
    });
    } else {
       res.redirect("/");
    }
    
};



//exports
module.exports.suggestion = suggestion;


