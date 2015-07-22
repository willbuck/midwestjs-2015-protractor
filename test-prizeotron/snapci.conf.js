exports.config = {	
	specs: ['./*.spec.js'],
	
	seleniumArgs: ['-browserTimeout=60'],
	
	allScriptsTimeout: 30000
};


if (process.env.SNAP_CI) {
  exports.config.chromeDriver = '/usr/local/bin/chromedriver';
}