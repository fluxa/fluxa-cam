// Raspicam wrapper
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

exports.capture = function(callback) {

  try{
    var onRead = function(err, timestamp, filename) {
      console.log('err => %s | t => %s | f => %s',err,timestamp,filename);
      cam.removeListener('read', onRead);
    }
    cam.on('read', onRead);
    cam.start();
  } catch(e) {
    console.log('caught error => %s',e);
    callback(e);
  }

}
