quizApp.controller('homeController',["$scope","dataService","$state","$timeout",function($scope,dataService,$state,$timeout) {
       $scope.quizData = dataService.getQuizData();
      
       $scope.gotoQuestions = function(data){
       		dataService.setSelectedQuizData(data);
       		$state.go("questions",{"id":data.id});
       }
       $timeout(function(){
       		 angular.element(document.querySelector(".nav > .nav-links > a")).addClass("active")
       },0)
      
}]);