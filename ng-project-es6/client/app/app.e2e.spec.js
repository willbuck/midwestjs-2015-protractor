/// <reference path="../../../typings/tsd.d.ts" />


describe('The Angulars Blog', function() {
	beforeEach(function() {
		isAngularSite(false);
	});
	describe('the blog page', function() {
		beforeEach(function() {
			browser.get('/#/blog');
		});
		it('should be there', function() {
			expect(element(by.css('div.links a[href="#/blog"]')).isPresent()).toBe(true);
		});	
	});	
})