myApp.controller('UserController', ['$http', '$location',  function($http, $location) {
  // This happens after view/controller loads -- not ideal but it works for now.
  var vm = this;

  console.log('checking user');

  // Upon load, check this user's session on the server
  $http.get('/user').then(function(response) {
      if(response.data.username) {
          // user has a curret session on the server
          vm.userName = response.data.username;
          console.log('User Data: ', vm.userName);
      } else {
          // user has no session, bounce them back to the login page
          $location.path("/home");
      }
  });

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


  vm.logout = function() {
    $http.get('/user/logout').then(function(response) {
      console.log('logged out');
      $location.path("/home");
    });
  };
}]);
