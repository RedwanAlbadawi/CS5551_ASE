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
   res.cookie('email', req.body).render('home');
   console.log('out');
});

app.post('/user', function(req, res){
   console.log(req.cookies);
   console.log('here');
   res.render('user');
});

//Listening to nodeJS Application
app.listen(3000, function(){
   console.log("Listening to port 3000")
});
