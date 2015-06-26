function Homepage() {
	this.mooCheese = element(by.css('div#logo img'));
	this.littleBirdie = element(by.css('div#logo div a:first-child img'));
	this.littleBirdieLinkTarget = "https://twitter.com/midwest_js";
	this.get = get;

	function get() {
		browser.get('http://midwestjs.com');
	}
}
module.exports = Homepage;