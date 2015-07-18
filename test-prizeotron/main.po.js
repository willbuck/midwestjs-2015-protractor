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
	// TODO repeater lists here?	
	// Utility functions
	this.get = get;	
	this.importEventData = importEventData;

	function get() {
		browser.get('http://prize-o-tron.herokuapp.com/');
	}
	
	function importEventData(apiKey, eventId) {
      this.apiKeyInput.sendKeys(apiKey);
      this.eventIdInput.sendKeys(eventId);
      return this.importButton.click();
    }
	
}
module.exports = MainPage;