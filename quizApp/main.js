var quizApp = angular.module("quizApp",['ui.router']);


//routing
quizApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
     	.state('home', {
            url: '/home',
            templateUrl: 'templates/home.html'
        })
        .state('questions', {
            url: '/questions/:id',
            templateUrl: 'templates/questions.html'
        })
        .state('results', {
        	url: '/results/:id',
          templateUrl: 'templates/results.html'
        });

});


 quizApp.controller('mainController',["$scope",function($scope) {

       
}]);
