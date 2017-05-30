var express = require( 'express' );
var router = express.Router();
var passport = require( 'passport' );
var Shoe = require( '../models/shoes_model.js' );
var User = require( '../models/user.model.js' );
var path = require( 'path' );



router.post('/', function (req, res){
  console.log('saving item', req.body);
  console.log( 'getting username',req.user);
  var newShoe = {
      username: req.user._id,
      description: req.body.description,
      imgUrl: req.body.imgUrl
  };
  var itemObj = Shoe(newShoe);
  itemObj.save(function(err, response){
    if (err) {
      console.log( 'problem', err );
      res.sendStatus( 500 );
    }
    else {
      console.log( 'working', response );
      res.sendStatus(201);
    }

  });
});


module.exports = router;
