# hi-typeof

Some sugar to the javascript `typeof` operator. Generate isStr, isNum and other typeof functions.

## Usage

```js
var is = require('hi-typeof')

var isStr =  is('string')
isStr('a string here') // => true

var isNum = is('number')
isNum(16) // => true
isNum('16') // => false

var isFn = is('function')
isFn(isFn) // => true

// Create inverse test
var isDef = is('undefined', false)
isDef(isDef) // => true
isDef(isDef.currentTime) // => false
```

Basically, it's a function I use a lot and just makes the code clear and concise. It does not add any extra functionallity to the `typeof` operator.

## Source

This is the smallest module I've published (sorry for the npm package pollution), so here is the full source code:

```js
module.exports = function (t, r) {
  var b = r === false
  return function (o) { return (typeof o === t) !== b }
}
```

## License

MIT License
