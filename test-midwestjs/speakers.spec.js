/// <reference path="../typings/tsd.d.ts" />
(function () {
    'use strict';
    var Speakers = require('./speakers.po.js');
    
    describe('speakers page', function() {    
        var speakers;
        beforeEach(function() {
          isAngularSite(false);
        });
    
        beforeEach(function() {
            speakers = new Speakers();
            speakers.get();        
        });
    
        it('should have 45 speaker divs', function() {      
            // Workshops were added, really there are 39 speakers still though                      
            expect(speakers.allSpeakers.count()).toBe(45);
        });
        it('should have a speaker named Will', function() {                
            expect(speakers.willbuck.isPresent()).toBe(true);        
        });
        it('should show the content of my talk when you click on me', function() {                
            speakers.wbPresentationLink.click(); // should be title of my talk        
    
            expect(speakers.wbPresentationDescription.isDisplayed()).toBe(true);
            expect(speakers.wbPresentationDescription.getText()).toBe(speakers.expectedPresentationDescription);
        });
    });   
})();