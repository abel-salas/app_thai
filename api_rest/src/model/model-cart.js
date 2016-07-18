var mongoose = require('mongoose');

/*
 *  ------  cart  --------
 *  Define model collection
 */

var cart = mongoose.Schema({
  name: String,
  type: String,
  price: Number,
  brand: String,
  description: String,
  stock: Number,
  created: Date,
  modified: Date
});
module.exports = mongoose.model('Cart', cart);
