//REQUIRES

var express = require( 'express' );
var router = express.Router();
var passport = require( 'passport' );
var Shoe = require( '../models/shoes_model.js' );
var path = require( 'path' );


router.get( '/', function( req, res ) {
  console.log( 'Hit myShoes Route' );
  Shoe.find({}, function( err, results ) {
    if( err ){
      console.log( err );
      res.sendStatus( 500 );
    }else{
      console.log( 'successful get shoes ->', results );
      res.status( 200 ).send( results );
    }
  });

});


module.exports = router;
