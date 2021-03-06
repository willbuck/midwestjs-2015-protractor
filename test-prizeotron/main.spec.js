/// <reference path="../typings/tsd.d.ts" />
var MainPage = require('./main.po.js');
var MainPageSecrets = require('./main.secrets.js');
var MainPageHttpBackendMock = require('./main.httpBackendMocks.js');

describe('Prize-O-Tron', function() {
  var mainpage,
    secrets,
    EXPECTED_MEETUP_ATTENDEES_FOR_SECRET = '7', // TODO WHERE SHOULD THESE GO??
    EXPECTED_DEFAULT_BADGE_TEXT = '0';
    
  describe('main page', function() {
    beforeEach(function() {        
      mainpage = new MainPage();
      secrets = new MainPageSecrets();
      mainpage.get();      
    });
    
    describe('key inputs and display elements', function() {
      it('should have the page object elements present and in a default state', function() {            
        expect(mainpage.apiKeyInput.isPresent()).toBe(true);
        expect(mainpage.eventIdInput.isPresent()).toBe(true);                
        expect(mainpage.importButton.isPresent()).toBe(true);
        expect(mainpage.selectWinnerButton.isPresent()).toBe(true);
        expect(mainpage.resetButton.isPresent()).toBe(true);
        expect(mainpage.remainingBadge.isPresent()).toBe(true);
        expect(mainpage.selectedBadge.isPresent()).toBe(true);        
        // Note that repeaters are not on the page until they have something in them!
        expect(mainpage.remainingBadge.getText()).toBe(EXPECTED_DEFAULT_BADGE_TEXT);
        expect(mainpage.selectedBadge.getText()).toBe(EXPECTED_DEFAULT_BADGE_TEXT); 
      });
    });
    
    
    describe('meetup API input boxes', function() {
      describe('using the live meetup API and secret key / eventId', function() {
        it('should load people for a good apiKey and eventId', function() {            
          mainpage.importEventData(secrets.goodApiKey, secrets.goodEventId);                
          expect(mainpage.remainingBadge.getText()).toBe(EXPECTED_MEETUP_ATTENDEES_FOR_SECRET);
          expect(mainpage.attendeeList.isPresent()).toBe(true);          
        });
        
        it('should load nothing for a bad apiKey and eventId', function() {            
          mainpage.importEventData(secrets.badApiKey, secrets.badEventId);        
          expect(mainpage.remainingBadge.getText()).toBe(EXPECTED_DEFAULT_BADGE_TEXT);
          expect(mainpage.attendeeList.isPresent()).toBe(false);
        });
      });
      // Couldn't get this to work, sad face :(
      // describe('using a mocked http backend', function() {
      //   it('should load pictures for a good apiKey and eventId', function() {
      //     browser.addMockModule('httpBackEndMock', MainPageHttpBackendMock.build([MainPageHttpBackendMock.goodResponse]));
      //     var eventId = 1;
      //     var goodApiKey = 'good';            
      //     mainpage.importEventData(goodApiKey, eventId);                
      //     expect(mainpage.remainingBadge.getText()).toBe(EXPECTED_MEETUP_ATTENDEES_FOR_SECRET);
      //   });
        
      //   it('should load nothing for a bad apiKey and eventId', function() {            
      //     browser.addMockModule('httpBackEndMock', MainPageHttpBackendMock.build([MainPageHttpBackendMock.badResponse]));
      //     mainpage.importEventData(secrets.badApiKey, secrets.badEventId);        
      //     expect(mainpage.remainingBadge.getText()).toBe(EXPECTED_DEFAULT_BADGE_TEXT);
      //   });
      // });
    });        
    
    describe('selecting winners', function() {
      it('should reduce the count of RSVPs whenever a winner is selected, and increase the selected count', function() {
        mainpage.importEventData(secrets.goodApiKey, secrets.goodEventId);                
        
        mainpage.remainingBadge.getText().then(function(rsvpCount) {
          var numSelected = 0;
          // After importing our data, the rsvps repeater should exist
          expect(mainpage.attendeeList.isPresent()).toBe(true);
          
          while(numSelected < rsvpCount) {
            mainpage.selectWinnerButton.click();
            numSelected++;                  
            expect(mainpage.remainingBadge.getText()).toBe('' + (rsvpCount - numSelected));
            // expect(mainpage.attendeeList.length).toBe(rsvpCount - numSelected); // TODO find out why attendeeList is busted          
            expect(mainpage.selectedBadge.getText()).toBe('' + numSelected);                    
          }
          // Button should then become unclickable   
          expect(mainpage.selectWinnerButton.isEnabled()).toBe(false);
          // After adding a ton of winners, the selected repeater should exist
          expect(mainpage.winnerList.isPresent()).toBe(true);
        });         
      });
    });    
    
    describe('reset', function() {
      it('should take away all information, including imports from meetup.com API', function() {
        // NOTE: This test fails below a browser width of 990-ish px, reset button is pushed behind RSVPs        
        mainpage.importEventData(secrets.goodApiKey, secrets.goodEventId);
        expect(mainpage.remainingBadge.getText()).toBe(EXPECTED_MEETUP_ATTENDEES_FOR_SECRET);
        expect(mainpage.selectedBadge.getText()).toBe(EXPECTED_DEFAULT_BADGE_TEXT);
        mainpage.selectWinnerButton.click();
        mainpage.selectWinnerButton.click();
        expect(mainpage.selectedBadge.getText()).toBe('2');             
        mainpage.resetButton.click();
        expect(mainpage.remainingBadge.getText()).toBe(EXPECTED_DEFAULT_BADGE_TEXT);
        expect(mainpage.selectedBadge.getText()).toBe(EXPECTED_DEFAULT_BADGE_TEXT);
      });
    });
    
    // DONT test randomness, better served for unit test + mocking RNG / saying built-in is good enough        
  });    
});