/*
this test demonstrates that you can unit test functions
using absolute imports
in order to do so you need the following section in jest config:
moduleNameMapper: {
  '^/imports/(.*)$': '<rootDir>/imports/$1'
},
*/

import { isOdd } from '/imports/api/calculator/helpers';

test('3 is odd', () => {
  expect(isOdd(1)).toBe(true);
});

test('4 is even', () => {
  expect(isOdd(4)).toBe(false);
});