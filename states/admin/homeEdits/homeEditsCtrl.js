var app = angular.module('cotef');

app.controller('homeEditsCtrl', function($scope, mainInfoRef, firebaseService){
	//userReference
  window.scrollTo(0, 0)

  $scope.mainInfo = mainInfoRef;

  $scope.updateMainInfo= function(){
    $scope.mainInfo.$save();
  };

  // $scope.toggleMainInfoHide = function(item){
  //   item.hide = !item.hide;
  //   $scope.mainInfo.$save(item);
  //   console.log("Hide Toggled")
  // };

});