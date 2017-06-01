myApp.controller('selectShoesController', ['$http', '$location',  function($http, $location) {
  var vm = this;

  console.log( 'selectShoesController function found' );

  vm.findWeather = function() {
    console.log( 'Found weather function' );

    $http({
        method: 'GET',
        url: 'http://api.openweathermap.org/data/2.5/forecast?zip=55337,us&APPID=7e5d40bdfca35a411fbe0dd2812e6a84'
      }).then(function(response) {
        console.log( 'response', response.data );
      });//end off http call
  };//END FIND WEATHER FUNCTION
  vm.findWeather();

  vm.connectWeather = function() {
    console.log( 'connectWeather function found' );

    $http({
      method: 'POST',
      url: '/connectWeather'
    }).then(function(response) {

    });
  };

  vm.logout = function() {
    $http.get('/user/logout').then(function(response) {
      console.log('logged out');
      $location.path("/home");
    });
  };
}]);
