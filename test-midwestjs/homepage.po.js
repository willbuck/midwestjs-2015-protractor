/// <reference path="../typings/tsd.d.ts" />
function Homepage() {
	this.mooCheese = element(by.css('div#logo img')); // MidwestJS Logo (The cheese says "Moooo")
	this.littleBirdie = element(by.css('div#logo div a:first-child')); // Twitter Logo
	this.littleBirdieLinkTarget = "https://twitter.com/midwest_js";
	this.get = get;
	this.angleInDegrees = angleInDegrees;

	function get() {
		browser.get('http://midwestjs.com');
	}
	
	function getCheeseSize() {
		
	}

	function angleInDegrees(opposite, adjacent) {
		return Math.atan(opposite / adjacent) * (180 / Math.PI);
	}
}
module.exports = Homepage;