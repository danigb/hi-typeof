var test = require('tape')
var is = require('.')

test('create tester', function (t) {
  var isStr = is('string')
  t.ok(isStr('this is a string'))
  t.notOk(isStr(9))
  t.end()
})

test('create inverse tester', function (t) {
  var isDef = is('undefined', false)
  t.ok(isDef('blah'))
  t.notOk(isDef(void 0))
  t.end()
})
