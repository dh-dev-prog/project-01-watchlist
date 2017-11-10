let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['scenarios.js'],
  baseUrl: 'http://localhost:8080/', //Need to run 'index.html'
  onPrepare: function () {
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: true
      }
    }));
  },
  jasmineNodeOpts: {
   print: function() {} //Get rid of the dot '.' when logging protractor
  }
}
