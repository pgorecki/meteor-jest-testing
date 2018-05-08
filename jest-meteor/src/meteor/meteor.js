const { Mongo } = require('./mongo');

const Meteor = {
  _methods: {},
  _users: [],
  _currentUserId: 'user1',
  isServer: true,
  loginWithPassword: jest.fn(),
  loginWithFacebook: jest.fn(),
  methods(m) {
    Object.assign(this._methods, m);
  },
  call(methodName, ...args) {
    const callContext = {
      userId: this.userId(),
      isSimulation: false,
      unblock: jest.fn(),
    };
    const result = this._methods[methodName].apply(callContext, args);
    return result;
  },
  publish: jest.fn(),
  subscribe: jest.fn(),
  user: jest.fn(),
  users: new Mongo.Collection(),
  userId() {
    return this._currentUserId
  },
  startup: jest.fn(),
  bindEnvironment: jest.fn(),
  wrapAsync: jest.fn(),
  Error: jest.fn(Error),
};

module.exports = { Meteor };
