(function () {

  var module = angular.module('OpenMtsFollowCli', ['ui.router']);


  module.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', 'config',
    function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, config) {


      $stateProvider.state('home', {
        url: config.VIRTUAL_PATH + '/:hash',
        controller: 'HomeController as vm',
        templateUrl: 'home.html'
      });

      $urlRouterProvider.otherwise(config.VIRTUAL_PATH + '/');
      $locationProvider.html5Mode({ enabled: true, requireBase: false });
    }]);

}).call(this);