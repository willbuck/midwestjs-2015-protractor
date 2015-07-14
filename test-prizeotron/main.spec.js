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
    
    it('should have the apiKey and eventId inputs', function() {            
      expect(mainpage.eventIdInput.isPresent()).toBe(true);        
      expect(mainpage.apiKeyInput.isPresent()).toBe(true); 
    });
    
    it('should load pictures for some given', function() {            
      expect(secrets.goodApiKey).toBe('DONT COMMIT THIS');
    });
  });    
});