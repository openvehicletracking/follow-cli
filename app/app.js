(function () {

  var module = angular.module('OpenMtsFollowCli', ['ui.router']);


  module.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

      $stateProvider.state('home', {
        url: '/:hash',
        controller: 'HomeController as vm',
        templateUrl: 'home.html'
      });

      $urlRouterProvider.otherwise('/');
      $locationProvider.html5Mode({ enabled: true, requireBase: false });
    }]);

}).call(this);