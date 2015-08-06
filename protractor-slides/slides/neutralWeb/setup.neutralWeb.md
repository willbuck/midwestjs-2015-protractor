## A little setup to do

In your conf:
```
exports.config = {  
  onPrepare: function() {
	global.isAngularSite = function(flag){
	    browser.ignoreSynchronization = !flag;
	};
  }
};
```

Before all your tests:
```
beforeEach(function() {
  isAngularSite(false);
});
```

note:
- Need this to avoid waiting for angular failures
- If you don't have this, non-angular sites WILL fail