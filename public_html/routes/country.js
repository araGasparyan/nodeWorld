var querystring = require("querystring");
var db = require("../model/db/ConecctDB.js");
var checkers = require("../model/validation/Checkers.js");
var matchers = require("../model/validation/Matchers.js");
var genHTML = require("../model/formatter/generateHTML.js");
var url=require('url');


var countries=function(req, res){
    if(req.session.successLogin){
    var input = (url.parse(req.url)).search;
    input=input.split('+').join(" ");
    res.redirect("/country/"+input.substr(input.indexOf('=')+1));
    } else {
       res.redirect("/");
    }
    
};

var country=function(req, res){
  
    if(req.session.successLogin){
  
        var countryId = req.params.countryId;
        //find serched country and renders it
        db.getCountryInfo(countryId, function(rows){
        if(checkers.outputExists(rows)){
        var continentPic = matchers.matchContinentPicture(rows[0].Continent);
            db.getLanguage(countryId,function(rowsLang){
            var languages=genHTML.generateTable(rowsLang,'languageClass',null,[]);
                db.getCities(countryId,function(rowsCities){
                var cities=genHTML.generateTable(rowsCities,'cityClass',{tdCount: 1, tdInnerHtml: ['Icon'],tdClasses:['town', 'city', 'bigCity'],condIntervals:[100000,1000000]},['Population']);
                    res.render("country", {
                        title: countryId,
                        onHeader: countryId,
                        rows: rows,
                        continentPic: continentPic,
                        languages: languages,
                        cities: cities
                    });
                });
                
            });
        } else {
        res.redirect("/home");
        }
        });
 
    } else {
       res.redirect("/");
    }
    
};





//exports
module.exports.country = country;
module.exports.countries = countries;

