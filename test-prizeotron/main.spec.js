/// <reference path="../typings/tsd.d.ts" />
var MainPage = require('./main.po.js');
var MainPageSecrets = require('./main.secrets.js');

describe('Prize-O-Tron', function() {
  var mainpage;
  var secrets;
  describe('main page', function() {
    beforeEach(function() {        
      mainpage = new MainPage();
      secrets = new MainPageSecrets();
      mainpage.get();      
    });
    
    it('should have the page object elements present and in a default state', function() {            
      expect(mainpage.eventIdInput.isPresent()).toBe(true);        
      expect(mainpage.apiKeyInput.isPresent()).toBe(true);
      expect(mainpage.importButton.isPresent()).toBe(true);
      expect(mainpage.selectWinnerButton.isPresent()).toBe(true);
      expect(mainpage.resetButton.isPresent()).toBe(true);
      expect(mainpage.remainingBadge.isPresent()).toBe(true);
      expect(mainpage.selectedBadge.isPresent()).toBe(true);
      expect(mainpage.remainingBadge.getText()).toBe('0');
      expect(mainpage.selectedBadge.getText()).toBe('0'); 
    });
    
    it('should load pictures for a good apiKey and eventId', function() {            
      mainpage.importEventData(secrets.goodApiKey, secrets.goodEventId);
      // TODO this is linked to the secret.eventId, should I put it there? 
      // I think so but then I already committed the 'shape' of that file...
      expect(mainpage.remainingBadge.getText()).toBe('7');
    });
    
    it('should load nothing for a bad apiKey and eventId', function() {            
      mainpage.importEventData(secrets.badApiKey, secrets.badEventId);
      // TODO this is linked to the secret.eventId, should I put it there? 
      // I think so but then I already committed the 'shape' of that file...
      expect(mainpage.remainingBadge.getText()).toBe('0');
    });    
    
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
    
    // TODO test randomness, how do I do that?
    it('should load pictures for a good apiKey and eventId', function() {                  
      expect('random').toBe(true);
    });
        
  });    
});