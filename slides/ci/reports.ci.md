## It helps to have reports

```
onPrepare: function(){
    jasmine.getEnv().addReporter(new HtmlReporter({
        baseDirectory: './target/test-results/screenshots'
    }));
},
```

```
"devDependencies": {
    "protractor": "^2.1.0",
    "protractor-html-screenshot-reporter": "0.0.20"
}
```