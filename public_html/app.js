var express = require('express');
var path = require('path');
var session = require('express-session');
var app=express();
var router = express.Router();

app.set("view engine", "ejs");
//variable __dirname is the folder where appexp is
app.set('views', path.join(__dirname, 'views'));

var routes = require('./routes/index');
var countries = require('./routes/country');

//this var is visible for every partial
app.locals.pageTittle = "Something for all";

//This helps to set session variables
app.use(session({secret: 'QWERTY',
saveUninitialized: true,
resave: true    
}));

//app.use('/', routes);
//app.use('/country', countries);


router.get("/", routes.index);
router.post("/", routes.index);
router.get("/home", routes.home);

//app.param('countryId', function(request, response, next, id){
//  // Do something with id
//  // Store id or other info in req object
//  // Call next when done
//  next();
//});



router.get("/country/:countryId", countries.country);

//import paths
app.use(express.static(path.join(__dirname, '/CSS')));
app.use(express.static(path.join(__dirname, '/js')));
app.use(express.static(path.join(__dirname, '/pictures')));
app.use(express.static(path.join(__dirname, '/model')));
//app.use(express.static(__dirname + '/CSS'));
//app.use(express.static(__dirname + '/js'));
//app.use(express.static(__dirname + '/pictures'));
//app.use(express.static(__dirname + '/model'));

//we can write even REGEXP as a route, should be in the end
router.get("*", function(req, res){
    res.send("Bad route");
});

var server=app.listen(3000, function(){
    console.log("I am listening");
});