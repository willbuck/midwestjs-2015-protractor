var HtmlReporter = require('protractor-html-screenshot-reporter');

exports.config = {	
	specs: [
        './test-midwestjs/*.spec.js',
        './test-prizeotron/*.spec.js'
    ],
    suites: {
        midwestjs: './test-midwestjs/*.spec.js',
        prizeotron: './test-prizeotron/*.spec.js'
    },
	
	seleniumArgs: ['-browserTimeout=60'],
	
	allScriptsTimeout: 90000,
	onPrepare: function(){
        global.isAngularSite = function(flag){
            browser.ignoreSynchronization = !flag;
        };
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: './target/test-results/screenshots'
        }));
    }
};


if (process.env.SNAP_CI) {
  exports.config.chromeDriver = '/usr/local/bin/chromedriver';
}