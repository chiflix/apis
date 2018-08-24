'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.server = exports.client = undefined;

var _client = require('./client');

var _client2 = _interopRequireDefault(_client);

var _server = require('./server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.client = _client2.default;
exports.server = _server2.default;