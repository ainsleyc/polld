
_ = require('lodash')
async = require('async')
request = require('request')

task = (statsd, cb) ->
  error = null
  statsd.timing('service.host.cpu', 0.20)
  statsd.timing('service.host.memory', 0.30)
  cb(error)

module.exports.task = task
