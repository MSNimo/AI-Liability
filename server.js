var fs = require('fs');
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var path = require('path');
var bodyParser = require('body-parser');

server.listen(process.env.PORT || 397, function(){
    console.log('listening on port 397');
});

app.set('view engine');
app.set('views', __dirname + '');
app.use(express.static(path.join(__dirname, '')));
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function(req, res){
  res.render('index'); 
});

