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
        expect(homepage.mooCheese.isPresent()).toBe(true);        
    });

    it('should have a clickable twitter link to @midwest_js', function() {        
        homepage.littleBirdie.click();            
        expect(browser.getCurrentUrl()).toBe(homepage.littleBirdieLinkTarget);            
    });
  });  
});