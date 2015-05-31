'use strict'

var _ = require('lodash');
var async = require('async');
var request = require('request');

function task(statsd, cb) {
  var error = null;
  statsd.timing('service.host.cpu', 0.20);
  statsd.timing('service.host.memory', 0.30);
  cb(error);
}

module.exports.task = task
