var app = angular.module('cotef');

app.controller('homeCtrl', function($scope, firebaseService, mainInfoRef) {
	window.scrollTo(0, 0)
	
	$scope.mainInfo = mainInfoRef;

	

})