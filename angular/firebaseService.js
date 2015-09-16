var app = angular.module('cotef');

app.service('firebaseService', function ($firebase, $firebaseObject, $firebaseArray) {
  var firebaseUrl = 'https://courtoftheelvenfae.firebaseio.com/';

  this.getUser = function(userId){
    return $firebaseObject(new Firebase(firebaseUrl + 'users/' + userId));
  };

  this.getHome = function() {
  	return $firebaseObject(new Firebase(firebaseUrl + 'home'));
  };

  this.getAbout = function() {
    return $firebaseObject(new Firebase(firebaseUrl + 'about'));
  };

  this.getBooking = function() {
    return $firebaseArray(new Firebase(firebaseUrl + 'booking'));
  };

  this.getProfiles = function() {
    return $firebaseObject(new Firebase(firebaseUrl + 'profiles'));
  };

  this.getCalendar = function() {
    return $firebaseArray(new Firebase(firebaseUrl + 'calendar'));
  };


})