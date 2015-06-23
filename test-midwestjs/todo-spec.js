beforeEach(function() {
  isAngularSite(false);
});

describe('midwestjs.com', function() {
  describe('home page', function() {
    it('should have a cow', function() {
        browser.get('http://midwestjs.com');
        
        var cheeseContainer = element(by.id('logo'));
        expect(cheeseContainer.isPresent()).toBe(true);
        var imageMooExists = cheeseContainer.isElementPresent(by.tagName('img'));
        expect(imageMooExists).toBe(true);
    });
  });  

  describe('speakers page', function() {    
    it('should have 39 speakers', function() {                
        browser.get('http://midwestjs.com/speakers');
        var speakers = element.all(by.css('div.col-md-4.speaker'));
        expect(speakers.count()).toBe(39);
    });
    it('should have a speaker named Will', function() {
        browser.get('http://midwestjs.com/speakers');
        var speakerNames = element.all(by.css('div.col-md-4.speaker div.media div.media-body h3'));
        var me = speakerNames.filter(function(elem, index) {
            return elem.getText().then(function(text) {
                return text == 'Will Buck';
            });
        });
        expect(me.first().isPresent()).toBe(true);
    });
  });

});
