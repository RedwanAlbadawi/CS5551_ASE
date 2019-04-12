var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
var bodyParser = require('body-parser')
app.use(cookieParser());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//Setting View Engine
app.set('view engine', 'pug');

//Setting public folder
app.use(express.static('public'));

//Default Route
app.get('/', function(req, res){
   res.render('home');
});

app.post('/', function(req, res){
   console.log('email =' + req.body.email);
   console.log('password =' + req.body.password);
   res.cookie('cookie', req.body).render('home');
});

app.post('/user', function(req, res){
   console.log('cookie = ' + req.cookies);
   res.render('user', {details: req.cookies.cookie});
});

//Listening to nodeJS Application
app.listen(3000, function(){
   console.log("Listening to port 3000")
});
