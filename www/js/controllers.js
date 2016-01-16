/* Controllers */

angular.module('app.controllers', [])
  .controller('AppCtrl', function($scope, $rootScope, $cordovaGeolocation, Info, $ionicModal) {

    $rootScope.coords = {
      lat: 0,
      lng: 0
    }

    $scope.get_location = function () {
      $cordovaGeolocation
        .getCurrentPosition()
        .then(function (position) {
          $rootScope.coords.lat  = position.coords.latitude;
          $rootScope.coords.lng = position.coords.longitude;
          $scope.fetchInfo({lat: $rootScope.coords.lat, lng: $rootScope.coords.lng});
        }, function(err) {
          console.log("Location error!");
          console.log(err);
        });
    }

    $scope.fetchInfo = function(params) {
      Info.get(params).$promise.then(function(data) {
        $rootScope.emergency_number = data.emergency_number;
        $rootScope.country_physician = data.country_physician;
        console.log(data);
      }, function(error) {
        // error handler
      });
    };

    $scope.get_location();

    $ionicModal.fromTemplateUrl('templates/emergency_modal.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.emergency_modal = modal;
    });

    $scope.emergency_call_show = function () {
      $scope.emergency_modal.show();
    }

    $scope.emergency_call_hide = function () {
      $scope.emergency_modal.hide();
    }

  })
;
