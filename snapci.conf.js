exports.config = {	
	specs: [
        './test-midwestjs/*.spec.js',
        './test-prizeotron/*.spec.js'
    ],
	
	seleniumArgs: ['-browserTimeout=60'],
	
	allScriptsTimeout: 90000,
	onPrepare: function(){
        global.isAngularSite = function(flag){
            browser.ignoreSynchronization = !flag;
        };
    }
};


if (process.env.SNAP_CI) {
  exports.config.chromeDriver = '/usr/local/bin/chromedriver';
}