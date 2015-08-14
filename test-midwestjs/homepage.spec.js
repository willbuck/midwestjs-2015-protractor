/// <reference path="../typings/tsd.d.ts" />
(function() {
  'use strict';
  var Homepage = require('./homepage.po.js');
  
  describe('midwestjs.com', function() {
    var homepage;
    beforeEach(function() {
      isAngularSite(false);
    });
    
    describe('home page', function() {
      beforeEach(function() {        
          homepage = new Homepage();
          homepage.get();
      });
  
      describe('the logo', function() {
        it('should have a cow', function() {                                      
          expect(homepage.logo.isPresent()).toBe(true);                    
        });
        it('should be a 400x400 square (and thus, has 45* angles through the middle)', function() {
          // checking our angles!
          var cheeseSize = homepage.getCheeseSize();
          cheeseSize.then(function(result) {
            expect(result.width).toBe(400);
            expect(result.height).toBe(400);
            expect(homepage.angleInDegrees(result.height, result.width)).toBe(45);
            expect(homepage.angleInDegrees(result.width, result.height)).toBe(45);
          });                
        })
      });            
  
      it('should have a clickable twitter link to @midwest_js', function() {
          homepage.twitterLink.getAttribute('href').then(function(linkTarget) {
            expect(linkTarget).toBe(homepage.twitterLinkTarget);
          });                                                  
      });
      
      it('should have a link to the code of conduct', function() {
        expect(homepage.theRules.isPresent()).toBe(true);
      });
    });  
  });
})();