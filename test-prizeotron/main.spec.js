/// <reference path="../typings/tsd.d.ts" />
var MainPage = require('./main.po.js');

describe('Prize-O-Tron', function() {
  var mainpage;
  describe('main page', function() {
    beforeEach(function() {        
      mainpage = new MainPage();
      mainpage.get();      
    });
    
    it('should have the apiKey and eventId inputs', function() {            
      expect(mainpage.eventIdInput.isPresent()).toBe(true);        
      expect(mainpage.apiKeyInput.isPresent()).toBe(true); 
    });
  });    
});