/* Controllers */

angular.module('app.controllers', [])
  .controller('AppCtrl', function($scope, $ionicModal, $timeout, $http) {

    $scope.emergency_call = function () {
      console.log('emergency_call')
    }

  })
;
