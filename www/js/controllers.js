angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $http, $state, $ionicHistory, $stateParams) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  console.log($state.current.name, $state);
  $scope.$ionicGoBack = function(backCount) {
    if($state.current.name == 'app.sidebarBookContentSingle')  {
      $state.go('app.sidebarBookContent');
    } else {
      $ionicHistory.goBack(backCount);
    }
  };
  //$state.go($state.current, {}, {reload: true}); 

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };

  /*$http.get('https://api.myjson.com/bins/2g9sr').then(function(response){
    $scope.sideMenuLinks = response.data.sideMenuLinks;
  });*/
  $scope.goToPage = function(index) {
    if($scope.sidebarLinkId == 1) {
      $state.go('app.sidebarBookContent', {id:index+1});
      console.log(index);
      return
    } else {
      $state.go('app.sidebarContent');
      $scope.sidebarId = index;
      console.log($scope.sidebarId);
    }
    if($scope.sidebarLinkId ==0) {
      if ($scope.sidebarId == 1) {
        $scope.sidePage = 'templates/founder.html';
      } else if ($scope.sidebarId == 0) {
        $scope.sidePage = 'templates/about.html';
      }
      else if ($scope.sidebarId == 2) {
        $scope.sidePage = 'templates/lorem.html';
      }
    }
    if($scope.sidebarLinkId == 5) {
      if ($scope.sidebarId == 1) {
        $scope.sidePage = 'templates/yogic-treatment.html';
      } else if ($scope.sidebarId == 0) {
        $scope.sidePage = 'templates/about.html';
      }
    }
    if($scope.sidebarLinkId == 6) {
      if ($scope.sidebarId == 1) {
        $scope.sidePage = 'templates/paincadashashiila.html';
      } else if ($scope.sidebarId == 0) {
        $scope.sidePage = 'templates/sixteen-points.html';
      } else if ($scope.sidebarId == 2) {
        $scope.sidePage = 'templates/secrets-for-long-life.html';
      }
      else if ($scope.sidebarId == 3) {
        $scope.sidePage = 'templates/our-internal-enemies.html';
      }
    }
    
    //$scope.sidebarId = index;
  }
  $scope.goTolink = function(index) {
    $scope.sidebarLinkId = index;
    console.log($scope.sidebarLinkId);
    
  }

  $scope.accoId = null;
  $scope.toggleLink = function(index) {
    if($scope.accoId != index) {
      $scope.accoId = index;
    } else {
      $scope.accoId = null;
    }
  }

  $scope.sideMenuLinks = [ {
        linkTitle: 'Introduction',
        innerLinkArr: [{
            innerLink: 'About',
            linkHref: '#/app/about',
            description: 'about'
          },
          {
            innerLink: 'Founder',
            linkHref: '#/app/founder',
            description: 'founder'
          },
          {
            innerLink: 'History',
            linkHref: '#/app/history',
            description: 'lorem ipsum3'
          }
          ]
        },
        {
            linkTitle: 'Social-Treatise',
            innerLinkArr: [{
              innerLink: 'Caryacarya-1',
              linkHref: '#/app/sidebarBookContent/1',
              description: '<h2 class=\"heading\">lalit</h2>'
            },
            {
              innerLink: 'Caryacarya-2',
              linkHref: '#/app/sidebarBookContent/2'
            },
            {
              innerLink: 'Caryacarya-3',
              linkHref: '#/app/sidebarBookContent/3'
            }
            ]
        },
        {
            linkTitle: 'Social-Economic Thoughts',
            innerLinkArr: [{
              innerLink: 'Prout',
              linkHref: '#/app/prout'
            },
            {
              innerLink: 'Neo-Humanism',
              linkHref: '#/app/neo-humanism'
            }
            ]
        },
        {
            linkTitle: 'Opinions & Collections',
            innerLinkArr: [{
              innerLink: 'P.R.Sarkar’s thoughts',
              linkHref: '#/app/P.R.Sarkar’s-thoughts'
            },
            {
              innerLink: 'Ananda Vanii Samgraha',
              linkHref: '#/app/ananda-vanii-samgraha'
            },
            {
              innerLink: 'Some selected opinions',
              linkHref: '#/app/some-selected-opinions'
            }
            ]
        },
        {
            linkTitle: 'Songs',
            innerLinkArr: [{
              innerLink: 'Prabhat Samgiita',
              linkHref: '#/app/prabhat-samgiita'
            },
            {
              innerLink: 'Kirtan',
              linkHref: '#/app/kirtan'
            }
          ]
        },
        {
            linkTitle: 'Science & Medicine',
            innerLinkArr: [{
              innerLink: 'Microvita',
              linkHref: '#/app/microvita',
              description: 'microvita'
            },
            {
              innerLink: 'Yogic treatment & Natural Remedies',
              linkHref: '#/app/Yogic-treatment',
              description: 'yogic-treatment'
            }
          ]
        },
        {
            linkTitle: 'Important Points',
            innerLinkArr: [{
              innerLink: 'Sixteen points',
              linkHref: '#/app/sixteen-points',
              description: 'sixteen-points'
            },
            {
              innerLink: 'Paincadashashiila',
              linkHref: '#/app/Paincadashashiila',
              description: 'paincadashashiila'
            }, 
            {
              innerLink: 'Secrets for long life',
              linkHref: '#/app/Secrets-for-long-life',
              description: 'secrets-for-long-life'
            }, 
            {
              innerLink: 'Our internal Enemies',
              linkHref: '#/app/our-internal-enemies',
              description:'our-internal-enemies'
            }
          ]
        }
    ];
})

.controller('PlaylistsCtrl', function($scope, $stateParams, $http) {
  /*$http.get('https://api.myjson.com/bins/2s1er', function(data){
    console.log(data);
    $scope.playlists = data;
  });
  $http.get("https://api.myjson.com/bins/2s1er")
    .then(function(response) {
        console.log(response.data.playlists);
    $scope.playlists = response.data.playlists;
    });*/

    /*$http.get('https://api.myjson.com/bins/nis3').then(function(response){
      console.log(response.data.mainSliderContent)
      $scope.mainSliderContent = response.data.mainSliderContent;
    });*/
  $scope.playlists = [
      { title: 'Supreme Command', id: 1, bgImage: 'supreme-command.jpg', articleDescription: 'page 1' },
      { title: 'Yama & Niyama', id: 2, bgImage: 'supreme-command.jpg', articleDescription: 'page 2'  },
      { title: 'Yoga', id: 3, bgImage: 'supreme-command.jpg', articleDescription: 'page 3'  },
      { title: 'Prabhat Sangeet', id: 4, bgImage: 'supreme-command.jpg' , articleDescription: 'page 4'  }
  ];

  $scope.mainSliderContent = [
    {
        sliderContent: 'When the flow of the mind is not impeded by selfishness, narrowness, and superstitions that alone is mukti (liberation).'
    },
    {
        sliderContent: 'When the flow of the mind is not impeded by selfishness, narrowness, and superstitions that alone is mukti (liberation).'
    },
    {
        sliderContent: 'When the flow of the mind is not impeded by selfishness, narrowness, and superstitions that alone is mukti (liberation).'
    }
  ]
  //$scope.pageId = $stateParams.playlistId;
  //console.log($scope.playlists[pageId].articleDescription);

})

.controller('PlaylistCtrl', function($scope, $stateParams, $http) {
  if($stateParams.playlistId != undefined) {
    $scope.pageId = $stateParams.playlistId;  
  }
  
  console.log($scope.pageId);
  /*$scope.singleDescription = [{'articleDescription': 'page 1', 'articleHeader': 'Header1' }, {'articleDescription': 'page 2', 'articleHeader': 'Header2'}, {'articleDescription': 'page 3', 'articleHeader': 'Header3'}, {'articleDescription': 'page 4', 'articleHeader': 'Header4'}];*/
  $http.get('https://api.myjson.com/bins/2zryj').then(function(response){
    $scope.singleDescription = response.data.singleDescription;
  });
})

.controller('sidebarContentCtrl', function($scope){
  console.log("hhhhh");
  $scope.sideMenuLinks = [ {
        linkTitle: 'Introduction',
        innerLinkArr: [{
            innerLink: 'About',
            linkHref: '#/app/about',
            description: 'about'
          },
          {
            innerLink: 'Founder',
            linkHref: '#/app/founder'
          },
          {
            innerLink: 'History',
            linkHref: '#/app/history'}
          ]
        },
        {
            linkTitle: 'Social-Treatise',
            innerLinkArr: [{
              innerLink: 'Caryacarya-1',
              linkHref: '#/app/caryacarya-1'
            },
            {
              innerLink: 'Caryacarya-2',
              linkHref: '#/app/caryacarya-2'
            },
            {
              innerLink: 'Caryacarya-3',
              linkHref: '#/app/caryacarya-3'}
            ]
        },
        {
            linkTitle: 'Social-Economic Thoughts',
            innerLinkArr: [{
              innerLink: 'Prout',
              linkHref: '#/app/prout'
            },
            {
              innerLink: 'Neo-Humanism',
              linkHref: '#/app/neo-humanism'
            }
            ]
        },
        {
            linkTitle: 'Opinions & Collections',
            innerLinkArr: [{
              innerLink: 'P.R.Sarkar’s thoughts',
              linkHref: '#/app/P.R.Sarkar’s-thoughts'
            },
            {
              innerLink: 'Ananda Vanii Samgraha',
              linkHref: '#/app/ananda-vanii-samgraha'
            },
            {
              innerLink: 'Some selected opinions',
              linkHref: '#/app/some-selected-opinions'
            }
            ]
        },
        {
            linkTitle: 'Songs',
            innerLinkArr: [{
              innerLink: 'Prabhat Samgiita',
              linkHref: '#/app/prabhat-samgiita'
            },
            {
              innerLink: 'Kirtan',
              linkHref: '#/app/kirtan'
            }
          ]
        },
        {
            linkTitle: 'Science & Medicine',
            innerLinkArr: [{
              innerLink: 'Microvita',
              linkHref: '#/app/microvita',
              description: 'microvita',
            },
            {
              innerLink: 'Yogic treatment & Natural Remedies',
              linkHref: '#/app/Yogic-treatment',
              description: 'yogic-treatment'
            }
          ]
        },
        {
            linkTitle: 'Important Points',
            innerLinkArr: [{
              innerLink: 'Sixteen points',
              linkHref: '#/app/sixteen-points',
              description: 'sixteen-points'
            },
            {
              innerLink: 'Paincadashashiila',
              linkHref: '#/app/Paincadashashiila',
              description: 'paincadashashiila'
            }, 
            {
              innerLink: 'Secrets for long life',
              linkHref: '#/app/Secrets-for-long-life',
              description: 'secrets-for-long-life'
            }, 
            {
              innerLink: 'Our internal Enemies',
              linkHref: '#/app/our-internal-enemies',
              description: 'our-internal-enemies'
            }
          ]
        }
    ];
})
.controller('sidebarBookCtrl', function($scope, $state, $stateParams,$location){
  console.log("hello", $stateParams);
  
  console.log($stateParams.id)
    if($stateParams.id == 1) {
      $scope.bookTitle = [
          {
            id: '1',
            title: 'Infant\'s Játakarma: The Naming of and First Feeding of Solid Food to an Infant',
          },
          {
            id: '2',
            title: 'The Process of Initiation',

          },
          {
            id: '3',
            title: 'Sádhaná',
          },
          {
            id: '4',
            title: 'Táttvika, Ácárya/á, and Purodhá',
          },
          {
            id: '5',
            title: 'Self-Analysis',

          },
          {
            id: '6',
            title: 'Relationship with an Ácárya/á',
          },
          {
            id: '7',
            title: 'Methods of Salutation',
          },
          {
            id: '8',
            title: 'Páiṋcajanya',

          },
          {
            id: '9',
            title: 'Dharmacakra',
          },
          {
            id: '10',
            title: 'Svádhyáya',
          },
          {
            id: '11',
            title: 'Dharma Mahácakra',

          },
          {
            id: '12',
            title: 'Tattvasabhá',
          },
          {
            id: '13',
            title: 'Jágrti',
          },
          {
            id: '14',
            title: 'Laying of the Foundation Stone',

          },
          {
            id: '15',
            title: 'House-Entry Ceremony',
          },
          {
            id: '16',
            title: 'Tree-Planting Ceremony',
          },
          {
            id: '17',
            title: 'Commencing a Journey',

          },
          {
            id: '18',
            title: 'Marriage Ceremony',
          },
          {
            id: '19',
            title: 'The Ideal Householder',
          },
          {
            id: '20',
            title: 'Birthday Ceremony',

          },
          {
            id: '21',
            title: 'Social Functions and Festivals',
          },
          {
            id: '22',
            title: 'The System of Invitation',
          },
          {
            id: '23',
            title: 'Dress',

          },
          {
            id: '24',
            title: 'Social Relationship between Men and Women',
          },
          {
            id: '25',
            title: 'Livelihood',
          },
          {
            id: '26',
            title: 'The Livelihood of Women',

          },
          {
            id: '27',
            title: 'Economic Policy',
          },
          {
            id: '28',
            title: 'InfantIdeal System of Inheritance',
          },
          {
            id: '29',
            title: 'Science and Society',

          },
          {
            id: '30',
            title: 'Social Punishment',
          },
          {
            id: '31',
            title: 'Disposal of the Dead Body',
          },
          {
            id: '32',
            title: 'Shráddha Ceremony',

          },
          {
            id: '33',
            title: 'Widows',
          },
          {
            id: '34',
            title: 'Bhukti Pradhána',
          },
          {
            id: '35',
            title: 'Samájamitram, Smártta, Jiivamitram and Dharmamitram',

          },
          {
            id: '36',
            title: 'Formation of Boards',
          },
          {
            id: '37',
            title: 'IUpabhukti Pramukha',
          },
          {
            id: '38',
            title: 'Sándhivigráhika, Janamitram and Lokamitram',

          },
          {
            id: '39',
            title: 'Your Various Organizations',
          },
          {
            id: '40',
            title: 'Táttvika, Ácárya/á, Purodhá and Their Concerned Boards',
          },
          {
            id: '41',
            title: 'Avadhúta/iká and Avadhúta Board',

          },
          {
            id: '42',
            title: 'Treasures of Ananda Marga',
          },
          {
            id: '43',
            title: 'Guru Vandaná',
          },
          {
            id: '44',
            title: 'Concluding Words',

          },
          {
            id: '45',
            title: 'Appendix: Maháprayáńa Divasa',
          }
      ]
    } else if($stateParams.id == 2) {
      $scope.bookTitle = [{
          id: '1',
          title: 'Sádhaná (Intuitional Practice)'
        },
        {
          id: '2',
          title:'The Body'
        },
        {
          id: '3',
          title:'Society'
        },
        {
          id: '4',
          title:'Miscellaneous'
        },
        {
          id: '5',
          title:'Paiṋcadasha Shiila (The Fifteen Rules of Behaviour)'
        },
        {
          id: '6',
          title:'Conduct Rules for Sádhakas'
        },
        {
          id: '7',
          title:'Sixteen Points'
        },
        {
          id: '8',
          title:'Social Norms'
        }
      ]
    }else if($stateParams.id == 3) {
      $scope.bookTitle = [{
          id: '1',
          title: 'Bathing Procedure and Pitr Yajiṋa'
        },
        {
          id: '2',
          title:'Procedure for Eating'
        },
        {
          id: '3',
          title:'Procedure for Fasting'
        },
        {
          id: '4',
          title:'Taking the Air'
        },
        {
          id: '5',
          title:'Physical Restraint'
        },
        {
          id: '6',
          title:'General Health Rules'
        },
        {
          id: '7',
          title:'Different Yoga Practices'
        },
        {
          id: '8',
          title:'Ásanas'
        },
        {
          id: '9',
          title:'Mudrás and Bandhas'
        },
        {
          id: '10',
          title:'Práńáyáma'
        }
      ]
    }


  
  
  

  $scope.goToBookPage = function(index) {
    $scope.bookPageIndex = index;
    $state.go('app.sidebarBookContentSingle');
    console.log(index);
    localStorage.setItem('BookNumber', $stateParams.id);
  }
})


.controller('sidebarBookSingleCtrl', function($scope, $stateParams){
  console.log('sidebarBookSingleCtrl');
  console.log($stateParams.bookPageIndex);
  if($stateParams.bookPageIndex != undefined) {
    $scope.bookPageIndex = $stateParams.bookPageIndex;
  }
  console.log($scope.bookPageIndex);

})

.controller('sidebarTreatmentCtrl', function($scope, $state) {
  $scope.treatments = [
      {
        id: '1',
        title: 'Explanatory Notes',
      },
      {
        id: '2',
        title: 'Dyspepsia (Indigestion)',

      },
      {
        id: '3',
        title: 'Hernia',
      },
      {
        id: '3',
        title: 'Appendicitis',
      },
      {
        id: '3',
        title: 'Acidity',
      },
      {
        id: '3',
        title: 'Haemorrhoids (Piles)',
      },
      {
        id: '3',
        title: 'Dysentery',
      },
      {
        id: '3',
        title: 'Syphilis',
      },
      {
        id: '3',
        title: 'Cancer',
      },
      {
        id: '3',
        title: 'Leprosy',
      },
      {
        id: '3',
        title: 'Emaciation',
      },
      {
        id: '3',
        title: 'Eczema',
      },
      {
        id: '3',
        title: 'Seminal Weakness',
      },
      {
        id: '3',
        title: 'Paralysis',
      },
      {
        id: '3',
        title: 'Gastric and Duodenal Ulcer',
      },
      {
        id: '3',
        title: 'Gall-Stones',
      },
      {
        id: '3',
        title: 'Chronic Gland Swelling',
      },
      {
        id: '3',
        title: 'Gonorrhoea',
      },
      {
        id: '3',
        title: 'Diabetes',
      },
      {
        id: '3',
        title: 'Deafness',
      },
      {
        id: '3',
        title: 'Rheumatism',
      },
      {
        id: '3',
        title: 'Hydrocele',
      },
      {
        id: '3',
        title: 'Kidney-Stones',
      },
      {
        id: '3',
        title: 'Tuberculosis',
      },
      {
        id: '3',
        title: 'Impotency and Infertility',
      },
      {
        id: '3',
        title: 'Blood Pressure Diseases',
      },
      {
        id: '3',
        title: 'Elephantiasis',
      },
      {
        id: '3',
        title: 'Asthma',
      },
      {
        id: '3',
        title: 'Leucoderma (White Leprosy)',
      },
      {
        id: '3',
        title: 'Nocturnal Emission',
      },
      {
        id: '3',
        title: 'Obesity',
      },
      {
        id: '3',
        title: 'Heart Disease',
      }
  ]

  $scope.goToTreatPage = function(index) {
    $scope.treatmentPageIndex = index;
    localStorage.setItem('treatmentPageIndex', index)
    $state.go('app.sidebarTreatmentContentSingle');
    console.log(index)
  }
})

.controller('sidebarTreatmentSingleCtrl', function($scope, $stateParams){
  console.log('sidebarBookSingleCtrl');
  console.log($stateParams.treatmentPageIndex, $stateParams);
  /*if($stateParams.treatmentPageIndex != undefined) {
    $scope.treatmentPageIndex = $stateParams.treatmentPageIndex;
  }*/
  $scope.treatmentPageIndex = localStorage.getItem('treatmentPageIndex')
  console.log($scope.treatmentPageIndex);

})


.directive('mainArticleBg', function(){
    return {
        restrict: 'A',
        template: '{{playlist.title}}',
        link: function(scope, elm, attr) {
          console.log(scope, elm, attr)
            var bgImageUrl = attr.mainArticleBg;
            elm.css({
                'background-image': 'url('+ bgImageUrl +')',
                'background-size': 'cover'
            })
        }
    }
})
.directive('sidebarContentDir', function(){
  console.log('fsfs');
  return {
    
    restrict: 'A',
    transclude: true,
    //scope: {sidebarContent: '=sidebarContentDir' },
   /* controller: function(attr, elem) {
      console.log(attr, elem);
    },
    templateUrl: function(elm, attr) {
      console.log(elm, attr);
      return 'templates/' +attr.sidebarContentDir+ '.html';
    }*/
    /*compile: function compile( tElement, tAttributes ) {
      
        console.log( tAttributes.sidebarContentDir + ' (compile)'  );
        return {
            pre: function preLink( scope, element, attributes ) {
                console.log( attributes.sidebarContentDir + ' (pre-link)', scope  );
                 scope.$parent.sidebarContentUrl = 'templates/' +attributes.sidebarContentDir+ '.html';
            },
            post: function postLink( scope, element, attributes ) {
                console.log(attributes.sidebarContentDir  );
                scope.$parent.sidebarContentUrl = 'templates/' +attributes.sidebarContentDir+ '.html';
                //scope.$apply();
            }
        };
     },*/
     link: function(scope, element, attributes) {
        //console.log(scope, element, attributes)
        /*scope.$watch(function() {
          return scope.sidebarLinkId;
          }, function(newValue, oldValue) {
            console.log(newValue, oldValue);
        })*/
        
        scope.sidebarContentUrl = 'templates/' +attributes.sidebarContentDir+ '.html';
      },
  
    template: '<div ng-include="sidebarContentUrl"></div>'
  }
})

// .directive('articleDescription', function(){
//     return {
//         restrict: 'EA',
//         template: '',

//         link: function(scope, elem, attr, controller) {

//         }
//     }
// })
;
