
/*!
 * Module dependencies.
 */

var raspicam = require('raspicam');
var cam;

function init() {
	if(cam) {
		cam.stop();
		cam = null;
	}
	var path = common.util.format('%s/temp/capture.jpg',common.rootPath);
	console.log('initializing cam with output path: %s',path);
	cam = new raspicam({
		mode: 'photo',
		output: path,
		w: 1024,
		h: 768,
		q: 80,
		t: 1,
		e: 'jpg'
	});
}

init();

exports.index = function (req, res) {
	res.render('main/index', {})
}

exports.capture = function(req, res) {
	if(cam) {
		cam.start();
	}
}
