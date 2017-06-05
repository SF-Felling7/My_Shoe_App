//REQUIRES
var express = require( 'express' );
var router = express.Router();
var passport = require( 'passport' );
var Shoe = require( '../models/shoes_model.js' );
var path = require( 'path' );


router.get( '/', function( req, res ) {
  console.log( 'Hit myShoes Route' );
  // req.body.user = req.session.passport.user;
  console.log(req.body.user);
  Shoe.find({userid: req.user._id }, function( err, results ) {
    if( err ){
      console.log( err );
      res.sendStatus( 500 );
    }else{
      console.log( 'successful get shoes ->', results );
      res.status( 200 ).send( results );
    }
  });

});

router.delete( '/removeShoes', function( req, res ) {
  console.log( 'hit removeShoes route' );
  var shoeIdToDelete = req.query.id;
  Shoe.remove( {_id: shoeIdToDelete }, function( err, results) {
    if( err ){
      console.log( err );
      res.sendStatus( 500 );
    }else{
      console.log( 'successful remove shoes ->', results );
      res.status( 200 ).send( results );
    }
  });
});


module.exports = router;
