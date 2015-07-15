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
      mainpage.apiKeyInput.sendKeys(secrets.goodApiKey);
      mainpage.eventIdInput.sendKeys(secrets.goodEventId);
      mainpage.importButton.click();
      expect(mainpage.remainingBadge.getText()).toBe('7');
    });
  });    
});