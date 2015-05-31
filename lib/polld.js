/*
 * polld
 * https://github.com/ainsleyc/polld.git
 *
 * Copyright (c) 2015 Ainsley Chong
 * Licensed under the MIT license.
 */

'use strict';

var program = require('commander');
var _ = require('lodash');

var options = require('./options');
var run = require('./run');

function failureExit(message) {
  console.log(message);
  process.exit(1);
}

function invalidParamMessage(param, value) {
  return ['Error: "', value, '" is an invalid ', param, ' parameter'].join('');
}

function validateParams(taskfile, opts) {
  if (!options.port.validate(opts.port)) {
    failureExit(invalidParamMessage('port', opts.port));
  }

  if (!options.port.validate(opts.interval)) {
    failureExit(invalidParamMessage('interval', opts.interval));
  }

  var taskObject = null;
  try {
    taskObject = require([process.cwd(), '/', taskfile].join(''));
  } catch (e) {
    failureExit(invalidParamMessage('taskfile', taskfile));
  }

  if (!_.isFunction(taskObject.task)) {
    failureExit('taskfile does not correctly implement a "task" function');
  }

  run(taskfile, opts);
}

program
  .version('0.0.1')
  .usage('[options] <taskfile>')
  .option('-h, --host [host]', 'statsd host [localhost]', 'localhost')
  .option('-p, --port [port]', 'statsd port [8125]', 8125)
  .option('-i, --interval [ms]', 'reporting interval in ms [10000]', 10000)
  .action(validateParams)
  .parse(process.argv);

