quizApp.controller('questionController',["$scope","dataService","$state","$stateParams","$rootScope","$timeout",
  function($scope,dataService,$state,$stateParams,$rootScope,$timeout) {
		  $scope.identifier = $stateParams.id
       $scope.questionsData = dataService.getQuestionsData();
       $scope.quizItem = dataService.getSelectedQuizData();
       $scope.noData = false;
       if($scope.quizItem && !$scope.quizItem.id){
           $scope.noData = true;
       }
      $scope.$watch("questionsData",function( newValue, oldValue ) {
                        console.log($scope.questionsData)
         },true);

      $scope.gotoResultsPage = function(identifier){
      		 dataService.setSelectedData($scope.questionsData);
      		$state.go("results",{"id":identifier});
      }
       $timeout(function(){
           angular.element(document.querySelector(".nav > .nav-links > a")).removeClass("active")
       },0)
       $scope.gotoHome = function(){
        $state.go("home")
      }
}]);