/*
 * polld
 * https://github.com/ainsleyc/polld.git
 *
 * Copyright (c) 2015 Ainsley Chong
 * Licensed under the MIT license.
 */

'use strict';

var program = require('commander');

var run = require('./run');

program
  .version('0.0.1')
  .usage('[options] <taskfile>')
  .option('-h, --host [host]', 'statsd host [localhost]', 'localhost')
  .option('-p, --port [port]', 'statsd port [8125]', 8125)
  .option('-i, --interval [ms]', 'reporting interval in ms [10000]', 10000)
  .action(run)
  .parse(process.argv);

