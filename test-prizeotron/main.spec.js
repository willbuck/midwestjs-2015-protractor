/// <reference path="../typings/tsd.d.ts" />
var MainPage = require('./main.po.js');
var MainPageSecrets = require('./main.secrets.js');

describe('Prize-O-Tron', function() {
  var mainpage,
    secrets,
    EXPECTED_MEETUP_ATTENDEES_FOR_SECRET = '7',
    EXPECTED_DEFAULT_BADGE_TEXT = '0';
    
  describe('main page', function() {
    beforeEach(function() {        
      mainpage = new MainPage();
      secrets = new MainPageSecrets();
      mainpage.get();      
    });
    
    describe('key inputs and display elements', function() {
      it('should have the page object elements present and in a default state', function() {            
        expect(mainpage.eventIdInput.isPresent()).toBe(true);        
        expect(mainpage.apiKeyInput.isPresent()).toBe(true);
        expect(mainpage.importButton.isPresent()).toBe(true);
        expect(mainpage.selectWinnerButton.isPresent()).toBe(true);
        expect(mainpage.resetButton.isPresent()).toBe(true);
        expect(mainpage.remainingBadge.isPresent()).toBe(true);
        expect(mainpage.selectedBadge.isPresent()).toBe(true);
        expect(mainpage.remainingBadge.getText()).toBe(EXPECTED_DEFAULT_BADGE_TEXT);
        expect(mainpage.selectedBadge.getText()).toBe(EXPECTED_DEFAULT_BADGE_TEXT); 
      });
    });
    
    describe('meetup API input boxes', function() {
      it('should load pictures for a good apiKey and eventId', function() {            
        mainpage.importEventData(secrets.goodApiKey, secrets.goodEventId);
        // TODO this is linked to the secret.eventId, should I put it there? 
        // I think so but then I already committed the 'shape' of that file...
        // alternative: I mock out the $httpbackend
        expect(mainpage.remainingBadge.getText()).toBe(EXPECTED_MEETUP_ATTENDEES_FOR_SECRET);
      });
      
      it('should load nothing for a bad apiKey and eventId', function() {            
        mainpage.importEventData(secrets.badApiKey, secrets.badEventId);        
        expect(mainpage.remainingBadge.getText()).toBe(EXPECTED_DEFAULT_BADGE_TEXT);
      });
    });        
    
    describe('selecting winners', function() {
      it('should reduce the count of RSVPs whenever a winner is selected, and increase the selected count', function() {
        mainpage.importEventData(secrets.goodApiKey, secrets.goodEventId);
        mainpage.remainingBadge.getText().then(function(rsvpCount) {
          var numSelected = 0;
          while(numSelected < rsvpCount) {
            mainpage.selectWinnerButton.click();
            numSelected++;                  
            expect(mainpage.remainingBadge.getText()).toBe('' + (rsvpCount - numSelected));          
            expect(mainpage.selectedBadge.getText()).toBe('' + numSelected);                    
          }
          // Button should then become unclickable   
          expect(mainpage.selectWinnerButton.isEnabled()).toBe(false);
        });         
      });
    });    
    
    describe('reset', function() {
      it('should take away all information, including imports from meetup.com API', function() {
        var width = 1080; // NOTE: This test fails below 990-ish, reset button is pushed behind RSVPs
        var height = 1080;
        browser.driver.manage().window().setSize(width, height);
        mainpage.importEventData(secrets.goodApiKey, secrets.goodEventId);
        expect(mainpage.remainingBadge.getText()).toBe(EXPECTED_MEETUP_ATTENDEES_FOR_SECRET);
        expect(mainpage.selectedBadge.getText()).toBe(EXPECTED_DEFAULT_BADGE_TEXT);
        mainpage.selectWinnerButton.click();
        mainpage.selectWinnerButton.click();
        expect(mainpage.selectedBadge.getText()).toBe('2');
        browser.sleep(3000);        
        mainpage.resetButton.click();
        expect(mainpage.remainingBadge.getText()).toBe(EXPECTED_DEFAULT_BADGE_TEXT);
        expect(mainpage.selectedBadge.getText()).toBe(EXPECTED_DEFAULT_BADGE_TEXT);
      });
    });
    
    // DONT test randomness, better served for unit test + mocking RNG / saying built-in is good enough
        
  });    
});