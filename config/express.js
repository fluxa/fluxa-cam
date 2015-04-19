
/*!
 * Module dependencies.
 */

var express = require('express');
var helpers = require('view-helpers');
var lessMiddleware = require('less-middleware');
var pkg = require('../package');
var favicon = require('serve-favicon');
var logger = require('morgan');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var os = require('os');

/*!
 * Expose
 */

module.exports = function (app) {

	app.set('showStackError', true);

	// use express favicon
	app.use(favicon(common.config.root + '/public/img/favicon.ico'));

	// views config
	app.set('views', common.config.root + '/app/views');
	app.set('view engine', 'jade');


	// bodyParser should be above methodOverride
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json());

	// cookieParser should be above session
	app.use(cookieParser());

	// express session storage
	// TOFO: setup sessions


	// less
	//var tempDir = path.join(os.tmpDir(), 'css-cache');
	app.use(lessMiddleware(
		path.join(common.config.root,'/app/src/less'),
		{
			dest: path.join(common.config.root,'/public'),
			compress : true,
			debug: false,
			force: true
		}
	));

	// expose pkg and node env to views
	app.use(function (req, res, next) {
		res.locals.pkg = pkg;
		res.locals.env = common.node_env;
		//res.locals.session = req.session;
		next();
	})


	//static should be after less-middleware
	app.use(express.static(common.config.root + '/public'));


	// flash
	//app.use(flash());

	// View helpers
	app.use(helpers(pkg.name));


	app.locals.pretty = true;
	app.use(logger('tiny'));
}
