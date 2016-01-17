app.controller('ClinicsCtrl', function($scope, $stateParams) {


})

.controller('ClinicDetailsCtrl', function ($scope, $rootScope, $cordovaGeolocation, $stateParams, $ionicModal, $http) {
  $scope.map = {
    markers : {},
    center: {
      lat : $rootScope.coords.lat,
      lng : $rootScope.coords.lng,
      zoom : 12
    },
    events: {
      map: {
        enable: ['context'],
        logic: 'emit'
      }
    }
  };

  angular.extend($scope, {
    layers: {
        baselayers: {
            googleTerrain: {
                name: 'Google Terrain',
                layerType: 'TERRAIN',
                type: 'google'
            },
            googleHybrid: {
                name: 'Google Hybrid',
                layerType: 'HYBRID',
                type: 'google'
            },
            googleRoadmap: {
                name: 'Google Streets',
                layerType: 'ROADMAP',
                type: 'google'
            }
        }
    },
    defaults: {
        scrollWheelZoom: false
    }
  });

  $scope.setClinics = function () {
    if ($scope.clinics) {

      $scope.map.center  = {
        lat : $rootScope.coords.lat,
        lng : $rootScope.coords.lng,
        zoom : 12
      };

      angular.forEach($scope.clinics, function(clinic, index) {
        $scope.map.markers[clinic.id] = {
          lat: clinic.lat,
          lng: clinic.lng,
          message: clinic.name,
          // focus: true,
          draggable: false,
          icon: ''
        };
      });
    };

  }

  $scope.setClinics();

  $scope.go_quiz = function (event) {
    angular.element(document.getElementsByClassName("quiz-list-answer")).removeClass('active-answer');
    $state.go('app.quiz');
  }
})
;