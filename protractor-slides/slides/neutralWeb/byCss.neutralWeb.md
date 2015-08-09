# You can select by css

`by.css()` and `by.xpath()` are your friends here


```
// from test-midwestjs.com/homepage.po.js
this.littleBirdie = element(by.css('div#logo div a:first-child'));
```

note:
- If you're familiar with jquery you'll probably feel right at home with css selectors