
var app = require("http-server").createServer();
var assert = require('assert').assert;
var Browser = require('zombie');

var List = require('../lib/models/list.js').List;
var Task = require('../lib/models/task.js').Task;

describe('title page', function() {
  before(function() {
    server = app.listen(3000);
    browser = new Browser({ site: 'http://localhost:3000' });
  });
  beforeEach(function(done) {
    browser.visit('/', done);
  });

});
