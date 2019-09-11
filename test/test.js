"use strict";

var _main = require("./dist/main.js");

console.log("------"); /* eslint-disable no-undef */

console.log("\x1b[31m%s\x1b[0m", "isEmpty", (0, _main.isEmpty)([a]));
console.log("\n");

var intervals = [{ daily: 1000 }, { monthly: 200 }, { weekly: 300 }, { yearly: 40 }];

var min = (0, _main.minBy)(intervals, function (x) {
  return x[Object.keys(x)[0]];
});

console.log("\x1b[31m%s\x1b[0m", "Min By", min);

var a = {
  a: 1,
  b: { c: 1, d: { e: 1, f: { g: 1, h: { i: 1, j: { j: [1, 2, 3] } } } } }
};
var b = {
  a: 1,
  b: { c: 1, d: { e: 1, f: { g: 1, h: { i: 1, j: { j: [1, 2, 4] } } } } }
};

var x = [1, 2, {
  a: 1,
  b: 2,
  c: {
    a: 2,
    b: {
      m: [1, 2, {
        m: [1, 2, 4]
      }]
    }
  }
}];
var y = [1, 2, {
  a: 1,
  b: 2,
  c: {
    a: 2,
    b: {
      m: [1, 2, {
        m: [1, 2]
      }]
    }
  }
}];

console.log("------");
console.log("isEqual Object", (0, _main.isEqual)(a, b));
console.log("------");
console.log("isEqual Array", (0, _main.isEqual)(x, y));