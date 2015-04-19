
/*!
 * Module dependencies.
 */

var cam = require('../util/cam');

exports.index = function (req, res) {
	res.render('main/index', {})
}

exports.capture = function(req, res) {
	cam.capture(function(err, filename, timestamp) {
		if(!err) {
      res.json({success: true, filename: filename, ts: timestamp});
    } else {
      res.json({success: false, error: err});
    }
	})
}
