beforeEach(function() {
  isAngularSite(false);
});

describe('angularjs homepage todo list', function() {
  it('should add a todo', function() {
    browser.get('http://midwestjs.com');
    
    var cheeseContainer = element(by.id('logo'));
    expect(cheeseContainer.isPresent()).toBe(true);
    var imageMooExists = cheeseContainer.isElementPresent(by.tagName('img'));
    expect(imageMooExists).toBe(true);
  });
});
