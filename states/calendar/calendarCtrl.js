var app = angular.module('cotef');

app.controller('calendarCtrl', function($scope, firebaseService, calendarRef) {
	window.scrollTo(0, 0)

	$scope.calendar = calendarRef;

})