var express = require('express');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();
var port = process.env.PORT || 3000;



//route
var routes = require('./routes/index');
var todos = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.use('/', routes);
app.use('/todos', todos);

http.createServer(app).listen(port, function(){
  console.log('server is running on port' + port);
});
