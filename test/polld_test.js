'use strict';

var child_process = require('child_process');
var should = require('should');

function checkFailedExit(cmd) {
  (function() { child_process.execSync(cmd) }).should.throw(Error);
  try {
    child_process.execSync(cmd);
  } catch (e) {
    e.status.should.equal(1);
  }
}

describe('polld', function () {

  it('should fail for invalid port', function () {
    checkFailedExit('./bin/polld -p blah ./example/task.js');
  });

  it('should fail for invalid interval', function () {
    checkFailedExit('./bin/polld -i blah ./example/task.js');
  });

  it('should fail for missing taskfile', function () {
    checkFailedExit('./bin/polld ../example/doesNotExist.js');
  });

  it('should fail for missing "task" function in taskfile', function () {
    checkFailedExit('./bin/polld ./package.json');
  });

});
