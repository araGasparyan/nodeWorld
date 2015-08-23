var express = require('express');
var session = require('express-session');
var app=express();

app.set("view engine", "ejs");
//variable __dirname is the folder where appexp is
app.set("views", __dirname+"/views");
var routes = require('./routes/index');

//this var is visible for every partial
app.locals.pageTittle = "Something for all";

//This helps to set session variables
app.use(session({secret: 'QWERTY',
saveUninitialized: true,
resave: true    
}));

app.get("/", routes.index);
app.post("/", routes.index);
app.get("/home", routes.home);

//import paths
app.use(express.static(__dirname + '/CSS'));
app.use(express.static(__dirname + '/js'));
app.use(express.static(__dirname + '/pictures'));
app.use(express.static(__dirname + '/model'));

//we can write even REGEXP as a route, should be in the end
app.get("*", function(req, res){
    res.send("Bad route");
});

var server=app.listen(3000, function(){
    console.log("I am listening");
});