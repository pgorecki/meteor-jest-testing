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