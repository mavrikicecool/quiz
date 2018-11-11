quizApp.controller('resultController',["$scope","dataService","$state","$stateParams",function($scope,dataService,$state,$stateParams) {
      	$scope.questionsData = dataService.getSelectedData();
      	$scope.result = 0;
     	if($scope.questionsData && $scope.questionsData.length ==0){
     			$scope.noData = "Please go to Quiz Page by click on Home or below button"
     	}else{
     		$scope.total = $scope.questionsData.length;
     		var data = $scope.questionsData.filter(function(item){ return item.selected && item.selected == item.correct}) || [];
     		$scope.result = data.length || 0
     	}
     	$scope.gotoHome = function(){
     		$state.go("home")
     	}
}]);