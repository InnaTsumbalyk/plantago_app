app.controller('QuizCtrl', function($scope, $stateParams, $state, $ionicSlideBoxDelegate) {

  $scope.disableSwipe = function() {
    $ionicSlideBoxDelegate.enableSlide(false);
  };

  $scope.go_plantato = function () {
    $state.go('app.plantago_hero');
  }

  $scope.go_clinics = function () {
    $state.go('app.clinics');
  }

  $scope.slideTo = function(index) {
    $ionicSlideBoxDelegate.slide(index, 1000)
  };

})
;