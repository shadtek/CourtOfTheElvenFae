var app = angular.module('cotef');

app.controller('logoutCtrl', function($scope, authService, $rootScope, $location) {
	window.scrollTo(0, 0)

  $scope.logout = function(){
    authService.logout();
    $location.path('/login');
  }
})