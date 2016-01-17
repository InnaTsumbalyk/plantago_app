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

  // $scope.locate = function(){
  //   $cordovaGeolocation
  //     .getCurrentPosition()
  //     .then(function (position) {
  //       $scope.map.center.lat  = position.coords.latitude;
  //       $scope.map.center.lng = position.coords.longitude;
  //       $scope.map.center.zoom = 15;

  //       $scope.map.markers.now = {
  //         lat:position.coords.latitude,
  //         lng:position.coords.longitude,
  //         message: "You Are Here",
  //         focus: true,
  //         draggable: false
  //       };

  //     }, function(err) {
  //       // error
  //       console.log("Location error!");
  //       console.log(err);
  //     });

  // };
  // $scope.locate();
})
;