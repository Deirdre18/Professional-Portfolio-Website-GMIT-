angular.module('CalorieApp', ['ionic', 'ngCordova'])

.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('tabs', {
      url: '/tabs',
      abstract: true,
      templateUrl: 'views/tabs/tabs.html'
    })
    .state('tabs.meals', {
      url: '/meals',
      views: {
        'meals-tab': {
          templateUrl: 'views/meals/meals.html',
          controller: 'MealsController'
		  
        }
      }
    })
    
    .state('tabs.details', {
      url: '/details',
      views: {
        'details-tab': {
          templateUrl: 'views/details/details.html',
	  controller: 'DetailsController'
        }
      }
    })

    .state('tabs.barcode', {
      url: '/barcode',
      views: {
        'barcode-tab': {
          templateUrl: 'views/barcode/barScan.html',
	  controller: 'ScanController'
        }
      }
    });




  $urlRouterProvider.otherwise('/tabs/meals');
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.factory('Bal', function(){
  return {
	
	BreakfastTotal: 0,
	BreakfastMin: 0,
	BreakfastMax: 0,
	BreakfastAvg: 0,
	
	
	DinnerTotal: 0,
	DinnerMin: 0,
	DinnerMax: 0,
	DinnerAvg: 0,

	
	TeaTotal: 0,
	TeaMin: 0,
	TeaMax: 0,
	TeaAvg: 0,
	
	
	SupperTotal: 0,
	SupperMin: 0,
	SupperMax: 0,
	SupperAvg: 0,
	
	SnacksTotal: 0,
	SnacksMin: 0,
	SnacksMax: 0,
	SnacksAvg: 0,
    
      };
   
});
