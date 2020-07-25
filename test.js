/* eslint-disable no-undef */

import {
  isEmpty,
  minBy,
  isEqual,
  isValidDate,
  getDateObject,
} from './dist/main.js';

console.log('------');
console.log('\x1b[31m%s\x1b[0m', 'isEmpty', isEmpty([a]));
console.log('\n');

console.log('------ MIN CHECK START-------');
const intervals = [
  { daily: 1000 },
  { monthly: 200 },
  { weekly: 300 },
  { yearly: 40 },
];
const min = minBy(intervals, (x) => x[Object.keys(x)[0]]);
console.log('\x1b[31m%s\x1b[0m', 'Min By', min);
console.log('------ MIN CHECK START-------\n');

console.log('------ IS EUQAL CHECK START-------');
var a = {
  a: 1,
  b: { c: 1, d: { e: 1, f: { g: 1, h: { i: 1, j: { j: [1, 2, 3] } } } } },
};
var b = {
  a: 1,
  b: { c: 1, d: { e: 1, f: { g: 1, h: { i: 1, j: { j: [1, 2, 4] } } } } },
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
            m: [1, 2, 4],
          },
        ],
      },
    },
  },
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
            m: [1, 2],
          },
        ],
      },
    },
  },
];
console.log('isEqual Object', isEqual(a, b));
console.log('isEqual Array', isEqual(x, y));
console.log('------ IS EUQAL CHECK END -------\n');

console.log('------ VALID DATE CHECK START -------');
console.log('isValidDate 01-01-2000', isValidDate('01-01-2000'));
console.log('isValidDate 29-02-2000', isValidDate('29-02-2000'));
console.log('isValidDate 29-02-2001', isValidDate('29-02-2001'));
console.log('isValidDate 29-02-2001', isValidDate('2001-02-29'));
console.log('------ VALID DATE CHECK END -------\n');

console.log('------ DATE OBJECT CHECK START -------');
console.log('getDateObject check 01-01-2000', getDateObject('01-01-2000'));
console.log('getDateObject check 29-02-2000', getDateObject('29-02-2000'));
console.log('getDateObject check 29-02-2001', getDateObject('29-02-2001'));
console.log('------ DATE OBJECT DATE CHECK END -------');
