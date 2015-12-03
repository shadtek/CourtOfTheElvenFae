var app = angular.module('cotef');

app.controller('courtCtrl', function($scope, firebaseService, profilesRef) {
	window.scrollTo(0, 0)
	
	$scope.profiles = profilesRef;

	$scope.showUserModal = function(idx){
    var user = angular.copy($scope.profiles[idx]);
    $scope.currUser = user;
    $('#myModalLabel').text(user.name);
    $('#myModal').modal('show');
  };

})