require('ts-node/register');
var helpers = require('./helpers');

exports.config = {
  specs: ['./src/e2e/**/*.e2e.ts'],

  baseUrl: 'http://localhost:8080'
}