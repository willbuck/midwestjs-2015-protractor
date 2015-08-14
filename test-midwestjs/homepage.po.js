/// <reference path="../typings/tsd.d.ts" />
function Homepage() {
	// Elements
	this.logo = element(by.css('div#logo img[src="images/midwestjs-logo-400.png"]'));
	this.twitterLink = element(by.css('div#logo div a:first-child'));
	this.theRules = element(by.css('a[href="/code-of-conduct"]'));
	// Values
	this.twitterLinkTarget = "https://twitter.com/midwest_js";
	// Functions
	this.get = get;
	this.getCheeseSize = getCheeseSize;
	this.angleInDegrees = angleInDegrees;

	function get() {
		browser.get('http://midwestjs.com');
	}
	
	function getCheeseSize() {
		return this.logo.getWebElement().getSize();
	}

	function angleInDegrees(opposite, adjacent) {
		return Math.atan(opposite / adjacent) * (180 / Math.PI);
	}
}
module.exports = Homepage;