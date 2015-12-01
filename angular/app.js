var app = angular.module('cotef', ['ui.router', 'firebase']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "states/home/home.html",
      controller: 'homeCtrl',
      views: {
        "": {
          templateUrl: "states/home/home.html",
          controller: 'homeCtrl'
        },
        "court@home": {
          templateUrl: "states/home/court.html",
          controller: 'courtCtrl',
          resolve: {
            profilesRef: function(firebaseService, $state){
              return firebaseService.getProfiles();
            }
          }
        },
        "calendar@home": {
          templateUrl: "states/home/calendar.html"
        }
      },
      resolve: {
        mainInfoRef: function(firebaseService){
          return firebaseService.getMainInfo();
        }
      }
    })
    //Just the Admin header.
    .state('admin', {
      url: "",
      templateUrl: "states/admin/admin.html",
      abstract: true
    })
    //Login view
    .state('admin.login', {
      url: "/login",
      templateUrl: "states/admin/login/login.html",
      controller: 'loginCtrl'
    })
    //Where the buttons are held
    .state('admin.edits', {
      url: "",
      templateUrl: "states/admin/edits.html",
      controller: 'logoutCtrl',
      abstract: true
    })
    .state('admin.edits.homeEdits', {
      url: "/home-edits",
      templateUrl: "states/admin/homeEdits/homeEdits.html",
      controller: 'homeEditsCtrl',
      resolve: {
        loggedIn: function(authService){
          return authService.checkAuth();
        },
        mainInfoRef: function(firebaseService, $state){
          return firebaseService.getMainInfo();
        }
      }
    })
    .state('admin.edits.contactEdits', {
      url: "/contact-edits",
      templateUrl: "states/admin/contactEdits/contactEdits.html",
      controller: 'contactEditsCtrl',
      resolve: {
        loggedIn: function(authService){
          return authService.checkAuth();
        },
        mainInfoRef: function(firebaseService, $state){
          return firebaseService.getMainInfo();
        }
      }
    })
    .state('admin.edits.profilesEdits', {
      url: "/profiles-edits",
      templateUrl: "states/admin/profilesEdits/profilesEdits.html",
      controller: 'profilesEditsCtrl',
      resolve: {
        loggedIn: function(authService){
          return authService.checkAuth();
        },
        profilesRef: function(firebaseService, $state){
          return firebaseService.getProfiles();
        }
      }
    })
    // For any unmatched url, redirect to "/"
    .state('otherwise', {
    url: '*path',
    resolve: {
      redirect: function($location) {
        $location.path("/").replace()
        console.log("redirecting...")
      }
    }
    });

    $locationProvider.html5Mode(true);

})
.run(function($rootScope, $state){
  //If the route change failed due to authentication error, redirect them out
  $rootScope.$on('$stateChangeError', function(current, previous, rejection){
    console.log('You need to be logged in to see this page.');
    
      $state.go('about.admin.login');
  })
})
