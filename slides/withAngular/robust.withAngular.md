## Tests Become More Robust

Less likely to change than CSS selectors
```
// from test-prizeotron/main.po.js
this.apiKeyInput = element(by.model('api.key'));
this.remainingBadge = element(by.binding('rsvps.length'));
this.attendeeList = element(by.repeater('rsvps'))
```

note:
- Since we're binding directly to our variable names, we can separate any CSS styling / element layout concerns from our testing bindings
- We even have projects like Ramon Victor's gulp-protractor-qa 
- That project will do static analysis on all your element selectors and warn you early which are busted