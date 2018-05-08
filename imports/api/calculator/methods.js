import { Meteor } from 'meteor/meteor';
import { debug } from '/imports/api/calculator/helpers';

export function sum(a, b) {
  return a + b;
}

Meteor.methods({
  'add'(a, b) {
    return sum(a, b);
  }
});

