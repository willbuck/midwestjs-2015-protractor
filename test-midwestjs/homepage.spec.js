var Homepage = require('./homepage.po.js');

beforeEach(function() {
  isAngularSite(false);
});

describe('midwestjs.com', function() {
  var homepage;
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
        expect(cheeseSize).toBe(400);
        expect(cheeseSize.height).toBe(400)
        // TODO put an 'angle' test here (because I painted it into the talk title... derp)
    });

    it('should have a clickable twitter link to @midwest_js', function() {        
        homepage.littleBirdie.click();            
        expect(browser.getCurrentUrl()).toBe(homepage.littleBirdieLinkTarget);            
    });
  });  
});