/* eslint-disable no-undef */

import {
  isEmpty,
  minBy,
  isEqual,
  isValidDate,
  getDateObject,
} from "./dist/main.js";

const logTestResult = (description, result) => {
  if (result) {
    console.log(`✅ \x1b[32m${description}: PASSED\x1b[0m`);
  } else {
    console.log(`❌ \x1b[31m${description}: FAILED\x1b[0m`);
  }
};

console.log("------ START OF TESTS ------\n");

console.log("\n------ TEST: isEmpty ------");
try {
  let a = [];
  const result = isEmpty(a);
  logTestResult("isEmpty([])", result);
} catch (e) {
  logTestResult("isEmpty([])", false);
}
console.log("\n");

console.log("------ TEST: minBy ------");
try {
  const intervals = [
    { daily: 1000 },
    { monthly: 200 },
    { weekly: 300 },
    { yearly: 40 },
  ];
  const min = minBy(intervals, (x) => x[Object.keys(x)[0]]);
  logTestResult("minBy(intervals)", min.yearly === 40);
} catch (e) {
  logTestResult("minBy(intervals)", false);
}
console.log("\n");

console.log("------ TEST: isEqual ------");
try {
  const a = {
    a: 1,
    b: { c: 1, d: { e: 1, f: { g: 1, h: { i: 1, j: { j: [1, 2, 3] } } } } },
  };
  const b = {
    a: 1,
    b: { c: 1, d: { e: 1, f: { g: 1, h: { i: 1, j: { j: [1, 2, 4] } } } } },
  };
  const result1 = isEqual(a, b);
  logTestResult("isEqual(Object a, b)", !result1);

  const x = [
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
  const y = [
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
  const result2 = isEqual(x, y);
  logTestResult("isEqual(Array x, y)", !result2);
} catch (e) {
  logTestResult("isEqual(Object or Array)", false);
}
console.log("\n");

console.log("------ TEST: isValidDate ------");
try {
  logTestResult('isValidDate("01-01-2000")', isValidDate("01-01-2000"));
  logTestResult('isValidDate("29-02-2000")', isValidDate("29-02-2000"));
  logTestResult('isValidDate("29-02-2001")', !isValidDate("29-02-2001"));
  logTestResult('isValidDate("2001-02-29")', !isValidDate("2001-02-29"));
} catch (e) {
  logTestResult("isValidDate", false);
}
console.log("\n");

console.log("------ TEST: getDateObject ------");
try {
  logTestResult(
    'getDateObject("01-01-2000")',
    JSON.stringify(getDateObject("01-01-2000")) ===
      JSON.stringify({ year: "2000", month: "1", day: "1" })
  );
} catch (e) {
  logTestResult("getDateObject", false);
}
console.log("\n------ END OF TESTS ------\n");
