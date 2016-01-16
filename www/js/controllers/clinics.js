app.controller('ClinicsCtrl', function($scope, $stateParams) {


})

.controller('ClinicDetailsCtrl', function ($scope, $rootScope, $cordovaGeolocation, $stateParams, $ionicModal, $http) {
  $scope.map = {
    defaults: {
      tileLayer: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      maxZoom: 18,
      zoomControlPosition: 'bottomleft'
    },
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

  // $scope.fechPoints = function () {
  //   $http({
  //     method: 'GET',
  //     url: 'http://testerjson.herokuapp.com/jsons/280.json',
  //     params: {}
  //   }).success(function(data) {
  //     $scope.points = data.city.all_main_points;


  //     $scope.map.center  = {
  //       lat : $scope.points[0].latitude,
  //       lng : $scope.points[0].longitude,
  //       zoom : 12
  //     };

  //     angular.forEach($scope.points, function(point, index) {
  //       $scope.map.markers[point.id] = {
  //         lat: point.latitude,
  //         lng: point.longitude,
  //         message: point.name,
  //         // focus: true,
  //         draggable: false
  //       };
  //     });
  //     console.log(data);
  //   }).error(function(data) {
  //     console.log(data);
  //   });
  // }

  // $scope.fechPoints();

  $scope.locate = function(){
    $cordovaGeolocation
      .getCurrentPosition()
      .then(function (position) {
        $scope.map.center.lat  = position.coords.latitude;
        $scope.map.center.lng = position.coords.longitude;
        $scope.map.center.zoom = 15;

        $scope.map.markers.now = {
          lat:position.coords.latitude,
          lng:position.coords.longitude,
          message: "You Are Here",
          focus: true,
          draggable: false
        };

      }, function(err) {
        // error
        console.log("Location error!");
        console.log(err);
      });

  };
  $scope.locate();
})
;