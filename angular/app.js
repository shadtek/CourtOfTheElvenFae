var app = angular.module('cotef', ['ui.router', 'firebase']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  $stateProvider
      .state('home', {
      url: "/",
      templateUrl: "states/home/home.html",
      controller: 'homeCtrl',
      resolve: {
        homeRef: function(firebaseService){
          return firebaseService.getHome();
        }
      }
    })
    .state('about', {
      url: "/about",
      templateUrl: "states/about/about.html",
      controller: "aboutCtrl",
      resolve: {
        aboutRef: function(firebaseService){
          return firebaseService.getAbout();
        }
      }
    })
    .state('booking', {
      url: "/booking",
      templateUrl: "states/booking/booking.html",
      controller: 'bookingCtrl',
      resolve: {
        bookingRef: function(firebaseService){
          return firebaseService.getBooking();
        }
      }
    })
    .state('profiles', {
      url: "/profiles",
      templateUrl: "states/profiles/profiles.html",
      controller: 'profilesCtrl',
      resolve: {
        profilesRef: function(firebaseService){
          return firebaseService.getProfiles();
        }
      }
    })
    .state('calendar', {
      url: "/calendar",
      templateUrl: "states/calendar/calendar.html",
      controller: 'calendarCtrl',
      resolve: {
        calendarRef: function(firebaseService){
          return firebaseService.getCalendar();
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
    //Where the edit nav buttons are held
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
        homeRef: function(firebaseService, $state){
          return firebaseService.getHome();
        }
      }
    })
    .state('admin.edits.aboutEdits', {
      url: "/about-edits",
      templateUrl: "states/admin/aboutEdits/aboutEdits.html",
      controller: 'aboutEditsCtrl',
      resolve: {
        loggedIn: function(authService){
          return authService.checkAuth();
        },
        aboutRef: function(firebaseService, $state){
        return firebaseService.getAbout();
        }
      }
    })
    .state('admin.edits.bookingEdits', {
      url: "/booking-edits",
      templateUrl: "states/admin/bookingEdits/bookingEdits.html",
      controller: 'bookingEditsCtrl',
      resolve: {
        loggedIn: function(authService){
          return authService.checkAuth();
        },
        bookingRef: function(firebaseService, $state){
        return firebaseService.getBooking();
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
    .state('admin.edits.calendarEdits', {
      url: "/calendar-edits",
      templateUrl: "states/admin/calendarEdits/calendarEdits.html",
      controller: 'calendarEditsCtrl',
      resolve: {
        loggedIn: function(authService){
          return authService.checkAuth();
        },
        calendarRef: function(firebaseService, $state){
        return firebaseService.getCalendar();
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
    
      $state.go('admin.login');
  })
})
