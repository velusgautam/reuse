/* eslint-disable no-undef */

import { isEmpty, minBy, isEqual } from "./dist/main.js";

console.log("------");
console.log("\x1b[31m%s\x1b[0m", "isEmpty", isEmpty([a]));
console.log("\n");

const intervals = [
  { daily: 1000 },
  { monthly: 200 },
  { weekly: 300 },
  { yearly: 40 }
];

const min = minBy(intervals, x => x[Object.keys(x)[0]]);

console.log("\x1b[31m%s\x1b[0m", "Min By", min);

// var debounced = debounce(function(v) {
//   console.log(v);
// }, 1000);

// var b = memoize(a => {
//   return a + "1";
// });
// console.log(b("1"));
// console.log(b("3"));
// console.log(b("2"));
// console.log(b.cache);
// debounced(200);

var a = {
  a: 1,
  b: { c: 1, d: { e: 1, f: { g: 1, h: { i: 1, j: { j: [1, 2, 3] } } } } }
};
var b = {
  a: 1,
  b: { c: 1, d: { e: 1, f: { g: 1, h: { i: 1, j: { j: [1, 2, 3] } } } } }
};

var x = [
  1,
  2,
  {
    a: 1,
    b: 2,
    c: {
      a: 2,
      b: {
        m: [
          1,
          2,
          {
            m: [1, 2]
          }
        ]
      }
    }
  }
];
var y = [
  1,
  2,
  {
    a: 1,
    b: 2,
    c: {
      a: 2,
      b: {
        m: [
          1,
          2,
          {
            m: [1, 2]
          }
        ]
      }
    }
  }
];

console.log("------");
console.log("isEqual Object", isEqual(a, b));
console.log("------");
console.log("isEqual Array", isEqual(x, y));
// console.log("------");
