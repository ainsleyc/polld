'use strict';

var assert = require('should');
// var sinon = require('sinon');

// var options = require('../lib/options');
var taskRunner = require('../lib/taskRunner');

var statsdStub = {};
// function emptyTask(statsd, cb) {
//   cb(null);
// }

describe('taskRunner', function () {

  var taskfile = './example/task.js';
  var options = {
    host: 'localhost',
    port: 8125
  }

  it('should return number of iterations', function (done) {
    taskRunner._startIntervals(taskfile, options, 10, 10, function(err, count) {
      count.should.be.equal(10);
      done();
    });
  });

});
