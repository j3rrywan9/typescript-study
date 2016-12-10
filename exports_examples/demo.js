// node --use_strict demo.js

const Point = require('./Point.js');

var p1 = new Point(1, 2);
console.log(p1);

var p2 = new Point(3, 4);
console.log(p2);

const jerry = require('./parameter.js')('Jerry');
console.log(jerry);
console.log(jerry.name);
console.log(jerry.sayHi());
