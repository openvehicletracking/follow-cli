(function () {

  angular.module('OpenMtsFollowCli')
    .controller("HomeController", homeControllerFn);

  homeControllerFn.$inject = ['$stateParams', 'homeService', '$interval', '$rootScope', 'config'];

  function homeControllerFn($stateParams, homeService, $interval, $rootScope, config) {
    var vm = this;
    var intervalId;
    var zoom = 18;
    vm.mapOptions = {};

    if (config.PLACE) {
      vm.mapOptions.home = config.PLACE;
    }

    if (config.MAPS_STYLE) {
      vm.mapOptions.style = config.MAPS_STYLE;
    }

    function locationSuccess(state) {
      var mapData = {
        locations: {},
        zoom: zoom,
        clearMarkers: true,
        pan: true
      };

      mapData.locations[state.label] = {
        lat: state.latitude,
        lng: state.longitude,
        deviceId: state.label,
        date: new Date(),
        label: {
          text: state.label,
          fontSize: '14px',
          fontWeight: 'bold'
        },
        icon: {
          url: config.MARKER_ICON
        }
      };

      $rootScope.$broadcast('lat-lng-change', mapData);
      zoom = undefined;
    }

    function locationFail(errorCode) {
      if (errorCode === 404) {
        $interval.cancel(intervalId);
      }
    }

    function updateState() {
      homeService.getState($stateParams.hash, locationSuccess, locationFail);
    }

    intervalId = $interval(updateState, 1000);
    updateState();
  }

}).call(this);