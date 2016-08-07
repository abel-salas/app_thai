var mongoose = require('mongoose');

/*
 *  ------  cart  --------
 *  Define model collection
 */

var cart = mongoose.Schema({
  openCurrency: Number,
  closeCurrency: Number,
  created: Date,
  closed: Date,
  active: Boolean,
  currency: {
    card: Number,
    dollars: Number
  },
  result: Number
});

module.exports = mongoose.model('Cart', cart);
