# Console Errors

Can get missed. Try this

```
afterEach(function () {
  browser.manage().logs().get('browser').then(function (browserLog) {
    expect(browserLog.length).toEqual(0);
  });
});
```

[Source: Egghead.io](https://egghead.io/lessons/angularjs-use-protractor-to-catch-errors-in-the-console)
note:
- Helps catch errors your tests can be missing