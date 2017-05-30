var mongoose = require('mongoose');
var User = require('../models/user.model');
var Schema = mongoose.Schema;


var shoeSchema = new Schema({
    username: {type: String, required: true},
    description: {type: String, required: true},
    imgUrl: {type: String, required: true},

});

var Shoe = mongoose.model('Shoe', shoeSchema);

module.exports = mongoose.model('Shoe', shoeSchema);
