var app = angular.module('cotef');

app.service('firebaseService', function ($firebase, $firebaseObject, $firebaseArray) {
  var firebaseUrl = 'https://courtoftheelvenfae.firebaseio.com/';

  this.getUser = function(userId){
    return $firebaseObject(new Firebase(firebaseUrl + 'users/' + userId));
  };

  this.getMainInfo = function() {
  	return $firebaseObject(new Firebase(firebaseUrl + 'mainInfo'));
  };

  this.getProfiles = function() {
  	return $firebaseArray(new Firebase(firebaseUrl + 'profiles'));
  };
})