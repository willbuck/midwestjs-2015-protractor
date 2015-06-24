(function(){
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
        var speakers, me;

        beforeEach(function() {
            browser.get('http://midwestjs.com/speakers');
            speakers = element.all(by.css('div.col-md-4.speaker'));        
            var nameHeading;

            me = speakers.filter(function(elem, index) {                
                nameHeading = elem.element(by.css('div.media-body h3'));
                return nameHeading.getText().then(function(text) {
                    return text == 'Will Buck';
                });
            }).first();
        });

        it('should have 39 speakers', function() {                            
            expect(speakers.count()).toBe(39);
        });
        it('should have a speaker named Will', function() {                
            expect(me.isPresent()).toBe(true);        
        });
        it('should show the content of my talk when you click on me', function() {                
            me.element(by.css('div.media-body p a')).click(); // should be title of my talk
            var popupModalBody = me.element(by.css('div.modal-body p'));

            expect(popupModalBody.isDisplayed()).toBe(true);
            expect(popupModalBody.getText()).toBe(getExpectedModalBody());
        });
      });

    });


    function getExpectedModalBody() {
        return 'Front-end functional testing got you down? Protractor.js can help by providing simple APIs to navigate and assert properties of any running html, js and css. If you are using Angular, however, things get even easier! Visit this talk to see how you can get up and running with Protractor';
    }
}());