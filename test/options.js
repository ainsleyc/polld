'use strict';

var should = require('should');
var _ = require('lodash');

var options = require('../lib/options');

function parameterCheck(params) {
  it('should have a label', function() {
    should.exist(params.label);
  });

  it('should have a symbol', function() {
    should.exist(params.sym);
  });

  it('should have a required', function() {
    should.exist(params.required);
  });

  it('should have a validator', function() {
    should.exist(params.required);
  });

  it('should have a default if not required', function() {
    if(!params.required) {
      should.exist(params.default);
    }
  });
}

function positiveIntegerCheck(field) {
  it('should not allow non-integer values', function() {
    options[field].validator('blah').should.be.false
  });

  it('should not allow negative integers', function() {
    options[field].validator(-1).should.be.false
  });

  it('should allow positive integers', function() {
    options[field].validator(100).should.be.true
  });
}

describe('options', function () {

  describe('host', function() {
    parameterCheck(options.host);
  });

  describe('port', function() {
    parameterCheck(options.port);
    positiveIntegerCheck('port');
  });

  describe('interval', function() {
    parameterCheck(options.interval);
    positiveIntegerCheck('interval');
  });

});
