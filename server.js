var express = require('express');
var app = express();

var port = process.env.port|| 3000;

app.use(express.static(__dirname + '/public'));

require('./app/routes')(app);

app.listen(port);

exports = module.exports = app;
