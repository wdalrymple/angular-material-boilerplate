'use strict';
var express = require('express');
var path = require('path');
var logger = require('winston');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json({type:'*/*'}));
app.use(bodyParser.urlencoded({exented:true}));
app.use(express.static(path.join(__dirname,'/')));

var server = app.listen(3000);
logger.info("[SERVER] server start on local host port 3000");