
var app = angular.module('app', ['ionic', 'ngCordova', 'leaflet-directive', 'app.controllers', 'app.services']);

  app.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        window.cordova.plugins.Keyboard.disableScroll(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })

  app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app', {
        url: "/app",
        abstract: true,
        templateUrl: "templates/menu.html",
        controller: 'AppCtrl'
      })

      .state('app.quiz', {
        url: "/quiz",
        views: {
          'tab_quize': {
            templateUrl: "templates/quiz.html",
            controller: 'QuizCtrl'
          }
        }
      })

      .state('app.clinics', {
        url: "/clinics",
        views: {
          'tab_clinics': {
            templateUrl: "templates/clinics.html",
            controller: 'ClinicsCtrl'
          }
        }
      })

      .state('app.clinic', {
        url: "/clinics/:id",
        views: {
          'tab_clinics': {
            templateUrl: "templates/clinic.html",
            controller: 'ClinicDetailsCtrl'
          }
        }
      })

      .state('app.plantago_hero', {
        url: "/plantago_hero",
        views: {
          'tab_plantago_hero': {
            templateUrl: "templates/plantago_hero.html",
            controller: 'PlantagoHeroCtrl'
          }
        }
      })

    $urlRouterProvider.otherwise('/app/quiz');

  })
  .config(['$ionicConfigProvider', function($ionicConfigProvider) {
    $ionicConfigProvider.tabs.position('bottom');
  }])
  ;
