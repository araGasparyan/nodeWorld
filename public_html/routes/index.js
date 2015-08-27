var querystring = require("querystring");
var db = require("../model/db/ConecctDB.js");
var checkers = require("../model/validation/Checkers.js");


var index=function(req, res){
    if(req.method.toLowerCase() === "post") {
    req.on("data", function(postBody) {
        var query = querystring.parse(postBody.toString());
        //check login and password of the user
        db.checkLogin(query.userName, query.password, function(rows){
        if(checkers.outputExists(rows)){
        req.session.successLogin=true;
        res.redirect("/home");
        } else {
        res.render("index", {
        title: "Welcome",
        message: "Authorization failed: Please enter correct login and password"
        });
        }
        });
    });
    } else {
    res.render("index", {
       title: "Welcome",
       message: ""
    });
}
};

var home=function(req, res){
    if(req.session.successLogin){
    res.render("home", {
       title: "My First Node Hello World!!!",
       onHeader: "Hello World!!!"
    });
    } else {
       res.redirect("/");
    }
};



//exports.about=function(req, res){
//     res.render("default", {
//       title: "About us",
//       className: "about"
//    });
//    //res.send("It is MEEEEE");
//};


/*
//we can have url localhost:3000/who/Valod
app.get("/who/:name?", function(req, res){
    var name=req.params.name;
    res.send("It is "+name);
});


//we can have url localhost:3000/who/Valod/miban
app.get("/who/:name?/:title?", function(req, res){
    var name=req.params.name;
    var title=req.params.title;
    res.send("It is "+name+". Its title is "+title);
});
*/


//exports
module.exports.home = home;
module.exports.index = index;