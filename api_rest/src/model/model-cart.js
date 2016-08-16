var mongoose = require('mongoose');

/*
 *  ------  cart  --------
 *  Define model collection
 */

var cart = mongoose.Schema({
  totalCart: Number,
  closeCurrency: Object,
  created: Date,
  closed: Date,
  active: Boolean,
  currency: Object,
  result: Number
});

module.exports = mongoose.model('Cart', cart);
