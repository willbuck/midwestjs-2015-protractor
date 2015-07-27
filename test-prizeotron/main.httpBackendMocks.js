module.exports.goodResponse = function goodResponse($httpBackend) {
	var rsvps = [
		{"rsvp_id": 123, "response": "yes"},
		{"rsvp_id": 123, "response": "yes"}
	];	
	$httpBackend.whenGET('rsvps?event_id=1&key=good')	
};

module.exports.badResponse = function badResponse($httpBackend) {
	var rsvps = [];
	$httpBackend.whenGET('rsvps?event_id=1&key=bad')
};

module.exports.build = function build(funcs) {
	var funcStr = "angular.module('httpBackEndMock', ['ngMockE2E'])";

    if (Array.isArray(funcs)) {
    	for (var i = 0; i < funcs.length; i++) {
    		funcStr += "\r.run(" + funcs[i] + ")"
    	};
    } else {
  		funcStr += "\r.run(" + funcs + ")"
    }

    // funcStr += "\r.run(" + passThrough + ")";

    var funcTyped = Function(funcStr);

    return funcTyped;
}