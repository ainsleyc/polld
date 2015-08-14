'use strict';

var fork = require('child_process').fork;

var childPath = './lib/child.js';

function startIntervals(taskfile, options, interval, iterations, cb) {

  var finishedIntervals = 0;
  var intervalHandle = setInterval(function() {
    var args = [
      taskfile,
      options.host,
      options.port,
      options.prefix || '',
      options.suffix || ''
    ];
    fork(childPath, args);

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

  var interval = options.interval;
  var iterations = options.iterations;

  startIntervals(taskfile, options, interval, iterations, function(err) {
    cb(err);
  });
}

var taskRunner = {
  _startIntervals: startIntervals,
  run: run
};

module.exports = taskRunner;
