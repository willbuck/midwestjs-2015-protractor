var Speakers = require('./speakers.po.js');

beforeEach(function() {
  isAngularSite(false);
});

describe('speakers page', function() {    
    var speakers;

    beforeEach(function() {
        speakers = new Speakers();
        speakers.get();        
    });

    it('should have 39 speakers', function() {                            
        expect(speakers.allSpeakers.count()).toBe(39);
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
