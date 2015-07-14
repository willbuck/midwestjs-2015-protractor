function MainPageSecrets() {
	this.goodApiKey = 'DONT COMMIT THIS'; // TODO PUT YOUR API KEY HERE
	this.goodEventId = 'THIS IS OKAY TO COMMIT BUT WE WONT ANYWAY'; // TODO PUT THE EVENT ID YOU WANT TO TEST HERE
	this.badAPIKey = '0010101001'; // BINARY FREESTYLE!
	this.badEventId = '14986'; // We'll use these bad inputs to test our validation / error handling
}
module.exports = MainPageSecrets;