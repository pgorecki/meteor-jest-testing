import { isOdd } from './helpers';

// this test demonstrates that you can unit test functions without dependencies

test('3 is odd', () => {
  expect(isOdd(1)).toBe(true);
});

test('4 is even', () => {
  expect(isOdd(4)).toBe(false);
});