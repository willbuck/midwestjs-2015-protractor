function Homepage() {
	this.mooCheese = element(by.css('div#logo img'));
	this.littleBirdie = element(by.css('div#logo div a:first-child img'));
	this.littleBirdieLinkTarget = "https://twitter.com/midwest_js";
	this.get = get;
	this.angleInDegrees = angleInDegrees;

	function get() {
		browser.get('http://midwestjs.com');
	}

	function angleInDegrees(opposite, adjacent) {
		return Math.atan(opposite / adjacent) * (180 / Math.PI)
	}
}
module.exports = Homepage;