'use strict';

var validate = require('validate.js');

var options = {
  host: {
    label: 'statsd host',
    sym: 'h',
    default: 'localhost',
    required: false,
    validate: function (value) {
      if (!validate.isString(value)) { return false; }
      return true;
    }
  },

  port: {
    label: 'statsd port',
    sym: 'p',
    default: 8125,
    required: false,
    validate: function (value) {
      if (!validate.isInteger(value)) { return false; }
      if (value <= 0) { return false; }
      return true;
    }
  },

  interval: {
    label: 'reporting interval in ms',
    sym: 'i',
    default: 10000,
    required: false,
    validate: function (value) {
      if (!validate.isInteger(value)) { return false; }
      if (value <= 0) { return false; }
      return true;
    }
  }
};

module.exports = options;
