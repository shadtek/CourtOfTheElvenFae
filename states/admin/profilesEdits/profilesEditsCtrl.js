var app = angular.module('cotef');

app.controller('profilesEditsCtrl', function($scope, firebaseService, profilesRef){
  window.scrollTo(0, 0)

  $scope.profiles = profilesRef;

  $scope.addProfiles = function(item){
    $scope.profiles.$add(item);
    console.log("Added")
    $scope.item = ""
  }

  $scope.updateProfiles = function(item){
    if (item.rank2){
      item.rank = item.rank2;
      delete item.rank2;
    }
    $scope.profiles.$save(item);
    console.log("Updated")
  };

  $scope.toggleProfilesHide = function(item){
    item.hide = !item.hide;
    $scope.profiles.$save(item);
    console.log("Hide Toggled")
  };

  $scope.removeProfiles = function(item){
    $scope.profiles.$remove(item);
    console.log("Deleted")
  }

});