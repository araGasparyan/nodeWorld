var express = require('express');
var path = require('path');
var session = require('express-session');
var bodyParser = require('body-parser');
var app=express();






//var router = express.Router();



app.set("view engine", "ejs");
//variable __dirname is the folder where appexp is
app.set('views', path.join(__dirname, 'views'));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

var routes = require('./routes/index');
var countries = require('./routes/country');
var suggestion = require('./routes/suggestion');


//this var is visible for every partial
app.locals.pageTittle = "Something for all";

//This helps to set session variables
app.use(session({secret: 'QWERTY',
saveUninitialized: true,
resave: true    
}));

// instruct the app to use the `bodyParser()` middleware for all routes
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());





//app.use('/', routes);
//app.use('/country', countries);


app.get("/", routes.index);
app.post("/", routes.index);
app.get("/home", routes.home);

app.get("/country", countries.countries);
app.get("/country/:countryId", countries.country);

app.get("/suggestion", suggestion.suggestion);

//import paths
app.use(express.static(path.join(__dirname, '/CSS')));
app.use(express.static(path.join(__dirname, '/js')));
app.use(express.static(path.join(__dirname, '/pictures')));
app.use(express.static(path.join(__dirname, '/model')));
console.log(__dirname);
//app.use(express.static(__dirname + '/CSS'));
//app.use(express.static(__dirname + '/js'));
//app.use(express.static(__dirname + '/pictures'));
//app.use(express.static(__dirname + '/model'));
//we can write even REGEXP as a route, should be in the end
app.get("*", function(req, res){
    res.send("Bad route");
});

var server=app.listen(3000, '10.10.2.23', function(){
    console.log("I am listening");
});

