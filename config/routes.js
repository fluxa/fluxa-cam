
/**
 * Module dependencies.
 */


// controllers
var main = require('main');


/**
 * Expose
 */

module.exports = function (app) {
	app.get('/', main.index);
	app.post('/capture', main.capture);
};
