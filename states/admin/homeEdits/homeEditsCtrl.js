var app = angular.module('cotef');

app.controller('homeEditsCtrl', function($scope, mainInfoRef, firebaseService){
  window.scrollTo(0, 0)

  $scope.mainInfo = mainInfoRef;

  $scope.updateMainInfo= function(){
    $scope.mainInfo.$save();
  };


});