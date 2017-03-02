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

.run(function($ionicPlatform, $state) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    $state.go('app.playlists');
    console.log("hello")
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
    url: '/sidebarBookContent/',
    params: {id:null},
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
