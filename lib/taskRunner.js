'use strict';

require('coffee-script/register');
var StatsD = require('node-statsd');

function initStatsd(options) {
  var statsdOpts = {
    host: options.host,
    port: options.port,
    prefix: options.prefix || '',
    suffix: options.suffix || ''
  };
  return new StatsD(statsdOpts);
}

function loadTaskFn(taskfile) {
  return require(taskfile);
}

function startIntervals(taskFn, statsd, interval, iterations, cb) {
  var finishedIntervals = 0;
  var intervalHandle = setInterval(function() {
    taskFn(statsd, function(err) {
      if (err) {
        console.log(err);
      }
    });
    finishedIntervals++;
    if (finishedIntervals >= iterations) {
      clearInterval(intervalHandle);
      if (cb) {
        cb(null, finishedIntervals);
      }
    }
  }, interval);
}

function run(taskfile, options, cb) {

  var taskFn = loadTaskFn(taskfile).task;
  var statsd = initStatsd(options);

  var interval = options.interval;
  var iterations = options.iterations;

  startIntervals(taskFn, statsd, interval, iterations, function(err) {
    cb(err);
  });
}

var taskRunner = {
  _startIntervals: startIntervals,
  run: run
};

module.exports = taskRunner;
