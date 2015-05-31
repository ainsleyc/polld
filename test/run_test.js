'use strict';

var assert = require('should');
var sinon = require('sinon');

var options = require('../lib/options');
var taskRunner = require('../lib/taskRunner');

var statsdStub = {};
function emptyTask(statsd, cb) {
  cb(null);
}

describe('taskRunner', function () {

  it('should call the task iteration number of times', function (done) {
    var spy = sinon.spy(emptyTask);
    taskRunner._startIntervals(spy, statsdStub, 10, 10, function(err, count) {
      spy.callCount.should.be.equal(10);
      done();
    });
  });

  it('should return number of iterations', function (done) {
    var spy = sinon.spy(emptyTask);
    taskRunner._startIntervals(emptyTask, statsdStub, 10, 10, function(err, count) {
      count.should.be.equal(10);
      done();
    });
  });

});
