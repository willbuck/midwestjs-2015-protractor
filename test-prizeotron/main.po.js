/// <reference path="../typings/tsd.d.ts" />
function MainPage() {
	// Inputs
	this.eventIdInput = element(by.model('event.event_id'));
	this.apiKeyInput = element(by.model('api.key'));
	// Buttons
	this.importButton = element(by.partialButtonText('Import'));
	this.selectWinnerButton = element(by.partialButtonText('Prize Winner'));
	this.resetButton = element(by.buttonText('Reset Everything'));
	// Bindings
	this.remainingBadge = element(by.binding('rsvps.length'))
	this.selectedBadge = element(by.binding('selected.length'))	
	// Utility functions
	this.get = get;	

	function get() {
		browser.get('http://prize-o-tron.herokuapp.com/');
	}
}
module.exports = MainPage;