var app = angular.module('cotef');

app.controller('courtCtrl', function($scope, firebaseService, profilesRef) {
	window.scrollTo(0, 0)
	
	$scope.profiles = profilesRef;

	$scope.showUserModal = function(user){
    $scope.currUser = user;
    $('#myModalLabel').text(user.name);
    $('#myModal').modal('show');
  };

})