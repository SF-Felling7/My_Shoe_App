myApp.controller( 'addItemController', [ '$http', '$location', function( $http, $location ) {

var vm = this;

console.log( 'additem controller hit ' );

  vm.addItem = function () {
    console.log('in addItem');

    var itemObj ={
      description : vm.description,
      imgUrl : vm.imgUrl,
      climate : vm.climate
  };//end itemObj

  $http({
    method : 'POST',
    url : '/addItem',
    data : itemObj
  }).then(function success(response){
    console.log( 'res:', response);
  }); //ending success

};//ending addItem function

  vm.logout = function() {
    $http.get('/user/logout').then(function(response) {
      console.log('logged out');
      $location.path("/home");
    });
  };
}]);
