var express = require('express');
var path = require('path');
var body_parser = require('body-parser');


var app = express();

app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(express.static(path.join(__dirname, 'client')));

app.use(body_parser.json());





app.listen( 8000, function(){

	console.log('listening to port 8000');


});