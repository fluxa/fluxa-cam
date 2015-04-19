
/**
 * Module dependencies
 */

var express = require('express');
var fs = require('fs');
var common = require('./app/util/common');

require('express-namespace');


// Bootstrap models
fs.readdirSync(__dirname + '/app/models').forEach(function (file) {
	if (~file.indexOf('.js')) require(__dirname + '/app/models/' + file)
});

var app = express();

// Bootstrap application settings
require('./config/express')(app);

// Bootstrap routes
require('./config/routes')(app);

// Start the app by listening on <port>
var port = process.env.PORT || 7777;
app.listen(port);
console.log('Express app started on port %d | %s',port,common.node_env);

// Expose app
module.exports = app;
