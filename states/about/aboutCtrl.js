var app = angular.module('cotef');

app.controller('aboutCtrl', function($scope, firebaseService, aboutRef) {
	window.scrollTo(0, 0)

	$scope.about = aboutRef;


})