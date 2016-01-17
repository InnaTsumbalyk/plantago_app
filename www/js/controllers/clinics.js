app.controller('ClinicsCtrl', function($scope, $stateParams, $state, $rootScope) {
    $scope.goBack = function () {
      angular.element(document.getElementsByClassName("quiz-list-answer")).removeClass('active-answer');
      $state.go('app.quiz');
    }
})

.controller('ClinicDetailsCtrl', function ($scope, $rootScope, $cordovaGeolocation, $ionicHistory,
                                            $stateParams, $ionicModal, $state, $filter) {

  if (!$rootScope.clinics || ($rootScope.coords.lat == 0 && $rootScope.coords.lng == 0 )) {
    $state.go('app.quiz');
  } else {

    $scope.current_clinic = $filter('filter')($rootScope.clinics, {id: $stateParams.id})[0];

    $scope.active_tab = 'details';

    $scope.goBack = function () {
      $ionicHistory.goBack();
    }

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
          zoom : 13
        };
        angular.forEach($rootScope.clinics, function(clinic, index) {
          $scope.map.markers[clinic.id] = {
            lat: clinic.lat,
            lng: clinic.lng,
            message: clinic.name,
            // focus: true,
            draggable: false,
            icon: {
                iconUrl: 'img/H.png',
                iconSize:     [20, 23],
                shadowSize:   [50, 64],
                iconAnchor:   [22, 94],
                shadowAnchor: [4, 62]
            }
          };
        });
        $scope.map.markers['user'] = {
            lat: $rootScope.coords.lat,
            lng: $rootScope.coords.lng,
            message: 'Current location',
            draggable: false,
            icon: {
                iconUrl: 'img/Me.png',
                iconSize:     [20, 40],
                shadowSize:   [50, 64],
                iconAnchor:   [22, 94],
                shadowAnchor: [4, 62]
            }
          };
      };

    }

    $scope.setClinics();

    $ionicModal.fromTemplateUrl('templates/clinic_details_modal.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.details_modal = modal;
    });

    $scope.details_modal_show = function () {
      $scope.details_modal.show();
    }

    $scope.details_modal_hide = function () {
      $scope.details_modal.hide();
    }
  };


})
;