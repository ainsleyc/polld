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
    checkFailedExit('node ./lib/polld.js -p blah ./example/task.js');
  });

  it('should fail for invalid interval', function () {
    checkFailedExit('node ./lib/polld.js -i blah ./example/task.js');
  });

  it('should fail for missing taskfile', function () {
    checkFailedExit('node ./lib/polld.js ../example/doesNotExist.js');
  });

  it('should fail for missing "task" function in taskfile', function () {
    checkFailedExit('node ./lib/polld.js ./package.json');
  });

});
