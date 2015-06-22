exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['todo-spec.js'],
  onPrepare: function(){
        global.isAngularSite = function(flag){
            browser.ignoreSynchronization = !flag;
        };
    }
};
