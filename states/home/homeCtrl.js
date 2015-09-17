var app = angular.module('cotef');

app.controller('homeCtrl', function($scope, firebaseService, homeRef) {
	window.scrollTo(0, 0)

	$scope.home = homeRef;

})