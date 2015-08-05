# MidwestJS E2E Tests
Protractor tests covering portions of the conference website for [MidwestJS](www.midwestjs.com)

## Instructions
Requires npm modules protractor, so if you haven't already, be sure to

`npm install -g protractor`

In a terminal window, update your webdriver-manager & then run it

```
webdriver-manager update
webdriver-manager start
```

In a separate terminal window, run the test spec with the adjacent protractor configuration

`protractor protractor.conf.js`