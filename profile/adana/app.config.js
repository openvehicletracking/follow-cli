(function () {

  var config = {
    API_URL: 'https://takip.carlsjradana.com/api',
    MAPS_API_KEY: 'AIzaSyCzJj2IW8r5jbzxRUT3k0pE_h1AaQsSm50',
    MARKER_ICON: 'deliverybike.png',
    VIRTUAL_PATH: '',
    PLACE: {
      placeId: 'ChIJy1bqQcaOKBURcxBjfiPkgLg',
      icon: {
        url: 'carls-jr-logo-pic.png',
        w: 110,
        h: 65
      }
    },
    MAPS_STYLE: [{
        featureType: 'poi.business',
        stylers: [{ visibility: 'off' }]
    }]
  };


  angular.module('OpenMtsFollowCli').constant("config", config);
//prod
}).call(this);