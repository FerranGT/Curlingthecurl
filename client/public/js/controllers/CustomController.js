angular.module('myControllers')


.controller('CustomController', function($scope, close) {
		$scope.close = close;
		console.log("Lo encontre?")
	})