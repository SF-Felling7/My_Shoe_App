var myApp = angular.module('myApp', ['ngRoute', 'ui.bootstrap', 'ngAnimate' ]);

/// Routes ///
myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  // get rid of 1.6.4 #!
  $locationProvider.hashPrefix('');

  $routeProvider
    .when('/home', {
      templateUrl: '/views/home.html',
      controller: "LoginController as lc"
    })
    .when('/register', {
      templateUrl: '/views/register.html',
      controller: "LoginController as lc"
    })
    .when('/user', {
      templateUrl: '/views/user.html',
      controller: "UserController as uc"
    })
    .when( '/addItem', {
      templateUrl: '/views/addItem.html',
      controller: "addItemController as aic"
    })
    .when( '/myShoes', {
      templateUrl: '/views/myShoes.html',
      controller: "myShoesController as msc"
    })
    .when( '/selectShoes', {
      templateUrl: '/views/selectShoes.html',
      controller: "selectShoesController as ssc"
    })
    .otherwise({
      redirectTo: 'home'
    });

}]);
