var querystring = require("querystring");
var db = require("../model/db/ConecctDB.js");
var checkers = require("../model/validation/Checkers.js");


var index=function(req, res){
    if(req.method.toLowerCase() === "post") {
    req.on("data", function(postBody) {
        var con = db.connectDB();
        var query = querystring.parse(postBody.toString());
        con.connect();
        con.query("SELECT * FROM users where login='"+query.userName+"' AND password='"+query.password+"';", function(err, rows, fields) {
        if (!err){
        if(checkers.outputExists(rows)){
        res.redirect("/home");
        }
        res.render("index", {
        title: "Welcome",
        message: "Authorization failed: Please enter correct login and password"
        });
        }
        else{
        throw new Error(err);
        }
        });
        con.end();
        
    });
    } else {
    res.render("index", {
       title: "Welcome",
       message: ""
    });
}
};

var home=function(req, res){
    res.render("home", {
       title: "My First Node Hello World!!!",
       onHeader: "Hello World!!!"
    });
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