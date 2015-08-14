'use strict';

var fs = require('fs');

require('coffee-script/register');
var StatsD = require('node-statsd');

var taskfile = process.argv[2];
var host = process.argv[3];
var port = process.argv[4];
var prefix = process.argv[5];
var suffix = process.argv[6];

var statsdOpts = {
  host: host,
  port: port,
  prefix: prefix,
  suffix: suffix
};
var statsd = new StatsD(statsdOpts);

if (!fs.existsSync(taskfile)) {
  throw new Error('Taskfile ' + taskfile + ' does not exist');
}

var taskFn = require('../' + taskfile).task;

if (typeof taskFn !== 'function') {
  throw new Error('Taskfile does not have a valid task function');
}

taskFn(statsd, function(err) {
  if (err) {
    throw new Error('Task error: ' + err);
  }
});
