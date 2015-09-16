var app = angular.module('cotef');

app.controller('profilesCtrl', function($scope, firebaseService, profilesRef) {
	window.scrollTo(0, 0)

	$scope.profiles = profilesRef;

})