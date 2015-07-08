/// <reference path="../typings/tsd.d.ts" />
import angular from 'angular';

var app = angular.module('angle-measurer', []);

app.controller('TestController', function() {
	this.hello = "Canary in the coalmine";
});