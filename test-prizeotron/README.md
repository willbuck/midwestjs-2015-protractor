# Prize-o-tron E2E Tests
Protractor tests covering the key functionality of [Prize-o-tron](http://prize-o-tron.herokuapp.com/)

This is the webapp the [AngularMN](http://www.meetup.com/AngularMN) uses to chose monthly prize winners

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

## Note
The tests will fail if you have not updated your main.secrets.js and your main.spec.js to match the expected attendees for the eventID you provide

**PLEASE RUN** 
`git update-index --assume-unchanged main.secrets.js`

This should make git ignore any changes to the secrets file, saving you from publishing your API key by mistake.

Please ensure that when you add your API key and eventID to that file, you do not accidentally check it in

We call it secrets.js for a reason ;)