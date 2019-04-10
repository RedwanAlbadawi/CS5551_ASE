var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
app.use(cookieParser());

//Setting View Engine
app.set('view engine', 'pug');

//Setting public folder
app.use(express.static('public'));

//Default Route
app.get('/', function(req, res){
   res.render('home')
});

//Listening to nodeJS Application
app.listen(3000, function(){
   console.log("Listening to port 3000")
});
