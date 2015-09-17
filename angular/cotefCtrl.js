var app = angular.module('cotef');

app.controller('cotefCtrl', function($scope, $location){
	$scope.go = function(path) {
		$location.path(path)
	}
})