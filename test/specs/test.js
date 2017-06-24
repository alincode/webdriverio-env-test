// 斷言函式庫
var assert = require('assert');

describe('test', function() {

  it('check webdriverio website title', function() {
    browser.url('http://webdriver.io');
    assert.equal(browser.getTitle(), 'WebdriverIO - WebDriver bindings for Node.js');
  });

});