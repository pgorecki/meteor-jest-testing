/*
This test demonstrates that you can unit test functions
that import and use Meteor package. 

Since Meteor is in Meteor package, Jest cannot access it so we need to 
mock it. Lets create a mock of Meteor in tests/__mocks__/packages
and we should configure Jest tu use mocked packages:

  modulePaths: [
    '<rootDir>/node_modules/',
    '<rootDir>/tests/__mocks__/packages/',
  ],
*/


import { Meteor } from 'meteor/meteor';
import { sum } from './methods';

test('adds 1 + 2 to equal 3', () => {
  Object.assign({},{});
  expect(sum(1, 2)).toBe(3);
});

test('calling meteor method', () => {
  const result = Meteor.call('add', 1, 2);
  expect(result).toBe(3);
});

// test('failing test to check test source maps', () => {
//   const result = Meteor.call('add', 1, 2);
//   expect(result).toBe(4);
// });