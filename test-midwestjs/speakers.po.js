function Speakers() {
	this.allSpeakers = element.all(by.css('div.col-md-4.speaker'));
	this.willbuck = findMe.apply(this);
	this.wbPresentationLink = this.willbuck.element(by.css('div.media-body p a'));
	this.wbPresentationDescription = this.willbuck.element(by.css('div.modal-body p'));
	this.expectedPresentationDescription = 'Front-end functional testing got you down? Protractor.js can help by providing simple APIs to navigate and assert properties of any running html, js and css. If you are using Angular, however, things get even easier! Visit this talk to see how you can get up and running with Protractor';
	this.get = get;

	function findMe() {
		var nameHeading;
		return this.allSpeakers.filter(function(elem, index) {                
            nameHeading = elem.element(by.css('div.media-body h3'));
            return nameHeading.getText().then(function(text) {
                return text == 'Will Buck';
            });
        }).first();
	}

	function get() {
		browser.get('http://midwestjs.com/speakers');
	}
}
module.exports = Speakers;