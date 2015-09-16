var app = angular.module('cotef');

app.controller('bookingCtrl', function($scope, firebaseService, bookingRef) {
	window.scrollTo(0, 0)

	$scope.booking = bookingRef;

})