# Get your $ on

`by.css()` and `by.xpath()` are your friends here 

```
// from test-midwestjs.com/homepage.po.js
this.littleBirdie = element(by.css('div#logo div a:first-child'));
```

note:
- If you're familiar with jquery you'll probably feel right at home with css selectors
- Do note though, these can get busted inadvertantly by a CSS / HTML developer 
- It probably won't feel like they did anything wrong either
- Often this is mitigated by using ids on critical elements: 
- This approach abstracts semantic meaning IMO but I haven't seen great alternatives
- If you have, please tweet it out and share your knowledge :)