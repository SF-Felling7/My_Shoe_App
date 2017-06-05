myApp.controller( 'myShoesController', [ '$http', '$location', function( $http, $location ) {

var vm = this;
vm.shoes = [];

console.log( 'myShoesController connected' );

vm.myShoes = function() {
  console.log( 'running vm.myShoes' );
    $http ({
      method:'GET',
      url:'/shoes'
    }).then(function success( response ) {
      vm.shoes = response.data;
      console.log( 'response from shoes', response );
    }).catch(function(err) {
      console.log('error returning shoes:', err);
    });
  };

  vm.myShoes();

  vm.removeShoes = function( shoesId ) {
    console.log( 'removeShoes function running' );
    console.log( 'shoe id to remove is:', shoesId );

    $http({
      method:'DELETE',
      url: '/shoes/removeShoes',
      params: { id: shoesId }
    }).then(function success( response ) {
      console.log( 'in success :', response );
      vm.myShoes();
    });
  };

  vm.logout = function() {
    $http.get( '/user/logout' ).then(function( response ) {
      console.log( 'logged out' );
      $location.path( "/home" );
    });
  };
}]);
