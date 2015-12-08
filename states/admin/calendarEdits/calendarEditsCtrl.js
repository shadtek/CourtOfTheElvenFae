var app = angular.module('cotef');

app.controller('calendarEditsCtrl', function($scope, calendarRef, firebaseService){
  window.scrollTo(0, 0)

  $scope.calendar = calendarRef;

  $scope.addCalendar = function(item){
    $scope.calendar.$add(item);
    console.log("Added")
    $scope.item = ""
  }

  $scope.updateCalendar = function(item){
    $scope.calendar.$save(item);
    console.log("Updated")
  };

  $scope.toggleCalendarHide = function(item){
    item.hide = !item.hide;
    $scope.calendar.$save(item);
    console.log("Hide Toggled")
  };

  $scope.removeCalendar = function(item){
    $scope.calendar.$remove(item);
    console.log("Deleted")
  }

});