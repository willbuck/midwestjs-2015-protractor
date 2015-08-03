exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./**/*.e2e.spec.js'],
  baseUrl: 'http://localhost:4500',
  onPrepare: function(){
    global.isAngularSite = function(flag){
        browser.ignoreSynchronization = !flag;
    };
  }
};