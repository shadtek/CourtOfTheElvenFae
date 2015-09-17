var app = angular.module('cotef');

app.controller('mainCtrl', function($scope, firebaseService, mainRef) {
	window.scrollTo(0, 0)

	$scope.main = mainRef;

})