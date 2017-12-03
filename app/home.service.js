(function () {

  var module = angular.module('OpenMtsFollowCli');
  module.factory('homeService', homeServiceFn);

  homeServiceFn.$inject = ['$http', '$log', 'config'];

  function homeServiceFn($http, $log, config) {

    return {
      getState: getState
    };

    function getState(hash, successFn, failFn) {
      $http.get(config.API_URL + '/f/' + hash).then(function (response) {
        successFn(response.data);
      }, function (errResponse) {
        $log.error(errResponse);
        failFn(errResponse.status);
      });
    }

  }


}).call(this);