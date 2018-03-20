module.exports = {
  'Page Loaded'(browser) {
    browser
      .url('http://localhost:9000/')
      .waitForElementVisible('#search-weather')
      .setValue('#search-weather', 'Yuuhu! Test running!');
    browser.end();
  }
}

