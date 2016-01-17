app.controller('PlantagoHeroCtrl', function($scope, $stateParams, $state, $rootScope) {
    $scope.goBack = function () {
      angular.element(document.getElementsByClassName("quiz-list-answer")).removeClass('active-answer');
      $state.go('app.quiz');
    }
})
;