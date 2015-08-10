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
  
      it('should have a cow', function() {                            
          // TODO does isPresent belong in the page object?
          // On one hand, its a test tool specific API
          // OTOH, where does that stop? how much of the test tool do I dupe on my PO?
          expect(homepage.mooCheese.isPresent()).toBe(true);
          // this one makes me think more so "put it in the PO" but again not sure
          var cheeseSize = homepage.mooCheese.getWebElement().getSize();
          cheeseSize.then(function(result) {
            expect(result.width).toBe(400);
            expect(result.height).toBe(400);
            expect(homepage.angleInDegrees(result.height, result.width)).toBe(45);
            expect(homepage.angleInDegrees(result.width, result.height)).toBe(45);
          });                
      });
  
      it('should have a clickable twitter link to @midwest_js', function() {
          homepage.littleBirdie.getAttribute('href').then(function(linkTarget) {
            expect(linkTarget).toBe(homepage.littleBirdieLinkTarget);
          });
          // TODO click on link target and assert browser location goes there?                                        
      });
    });  
  });
})();