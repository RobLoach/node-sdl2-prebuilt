var os = require('os')
var path = require('path')

module.exports = path.join(__dirname, os.platform(), os.arch(), 'SDL2')
