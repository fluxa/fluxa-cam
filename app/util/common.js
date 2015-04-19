
/*!
* Module dependencies.
*/

var node_env = process.env.NODE_ENV || 'development';
var path = require('path');

common = {
  node_env: node_env,
  util: require('util'),
  config: require('../../config/config'),
  async: require('async'),
  _: require('underscore'),
  moment: require('moment'),
  rootPath : path.resolve(__dirname + '../../..')
}

module.exports = common;
