app.controller('ClinicsCtrl', function($scope, $stateParams, $state) {
  $scope.go_quiz = function () {
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
        angular.forEach($rootScope.clinics, function(clinic, index) {
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

    $scope.go_back = function () {
      $ionicHistory.goBack();
    }

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