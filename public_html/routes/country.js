var querystring = require("querystring");
var db = require("../model/db/ConecctDB.js");
var checkers = require("../model/validation/Checkers.js");




var country=function(req, res){
     console.log(12);
    if(req.session.successLogin){
           console.log(13);
        var countryId = req.params.countryId;
        console.log(countryId);
        
       console.log(1);
        //check login and password of the user
        db.test(countryId, function(rows){
        if(checkers.outputExists(rows)){
            console.log(rows);
        res.render("country", {
        title: countryId,
        onHeader: countryId,
        rows: rows
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

