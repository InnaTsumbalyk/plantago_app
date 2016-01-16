app.controller('QuizCtrl', function($scope, $stateParams, $state) {

  $scope.questions = {
    question_1: {
      title: 'Some text?',
      answer: ''
    },
    question_2: {
      title: 'Some text?',
      answer: ''
    },
    question_3: {
      title: 'Some text?',
      answer: ''
    }
  }

  $scope.go_plantato = function () {
    $state.go('app.plantago_hero');
  }

  $scope.go_clinics = function () {
    $state.go('app.clinics');
  }

  $scope.$watch('questions.question_1.answer', function(newVal, oldVal) {
    if (oldVal != '') {
      if ($scope.questions.question_1.answer == 'A') {
        $scope.go_plantato();
      } else{
        $scope.go_clinics();
      };
    };

  });

  $scope.$watch('questions.question_2.answer', function(newVal, oldVal) {
    if (oldVal != '') {
      if ($scope.questions.question_1.answer == 'A') {
        $scope.go_plantato();
      } else{
        $scope.go_clinics();
      };
    }
  });

})
;