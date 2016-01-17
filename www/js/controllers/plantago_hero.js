app.controller('PlantagoHeroCtrl', function($scope, $stateParams, $state) {

  $scope.go_quiz = function (event) {
    angular.element(document.getElementsByClassName("quiz-list-answer")).removeClass('active-answer');
    $state.go('app.quiz');
  }

})
;