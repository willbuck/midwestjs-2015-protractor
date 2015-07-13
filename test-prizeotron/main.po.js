/// <reference path="../typings/tsd.d.ts" />
function MainPage() {
	this.eventIdInput = element(by.model('event.event_id'));
	this.apiKeyInput = element(by.model('api.key'));
	this.get = get;	

	function get() {
		browser.get('http://prize-o-tron.herokuapp.com/');
	}
}
module.exports = MainPage;