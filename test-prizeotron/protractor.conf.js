exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./*.spec.js'],
  onPrepare: function(){
    global.isAngularSite = function(flag){
        browser.ignoreSynchronization = !flag;
    };
    var width = 1080; 
    var height = 1080;
    browser.driver.manage().window().setSize(width, height);
  }
};