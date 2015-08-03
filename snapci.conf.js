var HtmlReporter = require('protractor-html-screenshot-reporter');

exports.config = {		
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
        var width = 1080; 
        var height = 1080;
        browser.driver.manage().window().setSize(width, height);
    }
};


if (process.env.SNAP_CI) {
  exports.config.chromeDriver = '/usr/local/bin/chromedriver';
}