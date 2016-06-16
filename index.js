'use strict'

module.exports = function (t, r) {
  var b = r === false
  return function (o) { return (typeof o === t) !== b }
}
