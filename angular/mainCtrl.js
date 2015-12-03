var app = angular.module('cotef');

app.controller('mainCtrl', function($scope, $location){
	$scope.go = function(path) {
		$location.path(path)
	};

})