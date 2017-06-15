/*// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)

    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    //abstract: true,
    cache:false,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
  .state('app.sidebarContent', {
    url: '/sidebarContent',
    cache:false,
    views: {
      'menuContent': {
        templateUrl: 'templates/sidebarContent.html',
        controller: 'AppCtrl'
      }
    }
  })
  .state('app.sidebarBookContent', {
    url: '/sidebarBookContent/:id',
    cache:true,
    views: {
      'menuContent': {
        templateUrl: 'templates/books/sidebarBookContent.html',
        controller: 'sidebarBookCtrl'
      }
    }
  })
  .state('app.sidebarBookContentSingle', {
    url: '/sidebarBookContentSingle/:bookPageIndex',
    cache:false,
    views: {
      'menuContent': {
        templateUrl: function(elem, attr) {
          console.log(localStorage.getItem('BookNumber'));
          var bookNumber = localStorage.getItem('BookNumber');
          return 'templates/books/'+ bookNumber +'.html';
        },
        controller: 'sidebarBookSingleCtrl'
      }
    }
  })
  .state('app.sidebarTreatmentContent', {
    url: '/Yogic-treatment',
    cache:false,
    views: {
      'menuContent': {
        templateUrl: 'templates/yogic-treatment.html',
        controller: 'sidebarTreatmentCtrl'
      }
    }
  })
  .state('app.sidebarTreatmentContentSingle', {
    url: '/Yogic-treatment/:treatmentPageIndex',
    cache:false,
    views: {
      'menuContent': {
        templateUrl: 'templates/sidebarTreatmentContentSingle.html',
        controller: 'sidebarTreatmentSingleCtrl'
      }
    }
  })
  .state('app.search', {
    url: '/search',
    cache:false,
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      cache:false,
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/home',
      cache:false,
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    cache:false,
    views: { 
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  //$urlRouterProvider.otherwise('/app/home');
});
*/

// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform, $state, $ionicPopup,$timeout) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    $state.go('app.playlists');
    console.log("hello", window.Connection)
    /*if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }*/
    $timeout(function(){
       if (navigator && navigator.splashscreen) {
           navigator.splashscreen.hide();
       }
       if (window.navigator && window.navigator.splashscreen) {
           window.navigator.splashscreen.hide();
       }
     },2000);
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

    if(typeof navigator.connection !== "undefined") {
        console.log("hello");
        if(navigator.connection.type == Connection.NONE) {
            $ionicPopup.confirm({
                title: "Internet Disconnected",
                content: "The internet is disconnected on your device."
            })
            .then(function(result) {
                if(!result) {
                    ionic.Platform.exitApp();
                }
            });
        }
      }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
    url: '/app',
    //abstract: true,
    cache:false,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
  .state('app.sidebarContent', {
    url: '/sidebarContent',
    cache:false,
    views: {
      'menuContent': {
        templateUrl: 'templates/sidebarContent.html',
        controller: 'AppCtrl'
      }
    }
  })
  .state('app.sidebarBookContent', {
    url: '/sidebarBookContent',
    cache:false,
    views: {
      'menuContent': {
        templateUrl: 'templates/books/sidebarBookContent.html',
        controller: 'sidebarBookCtrl'
      }
    }
  })
  .state('app.sidebarBookContentSingle', {
    url: '/sidebarBookContentSingle/:bookPageIndex',
    cache:false,
    views: {
      'menuContent': {
        templateUrl: function(elem, attr) {
          console.log(localStorage.getItem('BookNumber'));
          var bookNumber = localStorage.getItem('BookNumber');
          return 'templates/books/'+ bookNumber +'.html';
        },
        controller: 'sidebarBookSingleCtrl'
      }
    }
  })
  .state('app.sidebarTreatmentContent', {
    url: '/Yogic-treatment',
    cache:false,
    views: {
      'menuContent': {
        templateUrl: 'templates/yogic-treatment.html',
        controller: 'sidebarTreatmentCtrl'
      }
    }
  })
  .state('app.sidebarTreatmentContentSingle', {
    url: '/Yogic-treatment/:treatmentPageIndex',
    cache:false,
    views: {
      'menuContent': {
        templateUrl: 'templates/sidebarTreatmentContentSingle.html',
        controller: 'sidebarTreatmentSingleCtrl'
      }
    }
  })
  .state('app.sidebarPrSarkarContent', {
    url: '/pr-sarkar',
    cache:false,
    views: {
      'menuContent': {
        templateUrl: 'templates/prSarkar.html',
        controller: 'prSarkarCtrl'
      }
    }
  })
  .state('app.sidebarPrSarkarContentSingle', {
    url: '/pr-sarkar/:prSarkarPageIndex',
    cache:false,
    views: {
      'menuContent': {
        templateUrl: 'templates/sidebarPrSarkarContentSingle.html',
        controller: 'prSarkarSingleCtrl'
      }
    }
  })
  .state('app.ananda-vanii-samgraha', {
    url: '/ananda-vanii-samgraha',
    cache:false,
    views: {
      'menuContent': {
        templateUrl: 'templates/ananda-vanii-samgraha.html',
       
      }
    }
   })
  .state('app.some-selected-opinions', {
    url: '/some-selected-opinions',
    cache:false,
    views: {
      'menuContent': {
        templateUrl: 'templates/some-selected-opinions.html',
       
      }
    }
   })
  .state('app.date', {
    url: '/date',
    cache:false,
    views: {
      'menuContent': {
        templateUrl: 'templates/date.html',
       
      }
    }
   })
  .state('app.aboutUs', {
    url: '/aboutUs',
    cache:false,
    views: {
      'menuContent': {
        templateUrl: 'templates/aboutUs.html',
        
      }
    }
   })
  .state('app.scriptures', {
    url: '/scriptures',
    cache:false,
    views: {
      'menuContent': {
        templateUrl: 'templates/scriptures.html',
        
      }
    }
   })
  .state('app.search', {
    url: '/search',
    cache:false,
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      cache:false,
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/home',
      cache:false,
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    cache:false,
    views: { 
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  //$urlRouterProvider.otherwise('/app/home');
});
