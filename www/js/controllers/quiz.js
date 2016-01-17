app.controller('QuizCtrl', function($scope, $stateParams, $state, $ionicSlideBoxDelegate) {

  $scope.disableSwipe = function() {
    $ionicSlideBoxDelegate.enableSlide(false);
  };

  $scope.go_plantato = function (event) {
    // angular.element('.quiz-list-answer').removeClass('active-answer');
    angular.element(event.target).addClass('active-answer');
    $state.go('app.plantago_hero');
  }

  $scope.go_clinics = function (event) {
    // angular.element('.quiz-list-answer').removeClass('active-answer');
    angular.element(event.target).addClass('active-answer');
    $state.go('app.clinics');
  }

  $scope.slideTo = function(event, index) {
    // angular.element('.quiz-list-answer').removeClass('active-answer');
    angular.element(event.target).addClass('active-answer');
    $ionicSlideBoxDelegate.slide(index, 1000);
  };

})
;