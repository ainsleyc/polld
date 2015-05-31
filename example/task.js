'use strict'

function task(cb) {
  var results = {
    'service.host.cpu': '0.20',
    'service.host.memory': '0.30'
  }
  cb(null, results);
}

module.exports.task = task
