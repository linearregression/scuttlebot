var path = require('path')

module.exports = require('rc')('ssb', {
  port: 2000,
  pass: 'password',
  path: path.join(process.env.HOME, '.ssb')
})
