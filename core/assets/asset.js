const md5 = require('md5')
let clock = 0

let exts = {
  '.wxml': '.jsx',
  '.js': '.js',
  '.wxss': '.css',
  '.json': '.json'
}


module.exports = class Asset {
  constructor(path, type, name) {
    this.path = path
    this.id = clock++
    this.hash = md5(this.id).slice(0, 16)
    this.name = name
    this.ext = exts[type]
    this.type = type.slice(1)
    this.dependencies = new Set()
    this.depsAssets = new Map()
    this.symbols = new Map()
  }
}
