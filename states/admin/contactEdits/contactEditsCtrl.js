var app = angular.module('cotef');

app.controller('contactEditsCtrl', function($scope, mainInfoRef, firebaseService){
	//userReference
  window.scrollTo(0, 0)

  $scope.mainInfo = mainInfoRef;

  $scope.updateMainInfo= function(){
    $scope.mainInfo.$save();
  };

});