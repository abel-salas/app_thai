var mongoose = require('mongoose');

/*
 *  ------  cart  --------
 *  Define model collection
 */

var cart = mongoose.Schema({
  totalCart: Number,
  closeCurrency: Number,
  openCurrency: Number,
  resultCurrency: Number,
  totalPayments: Object,
  created: Date,
  closed: Date,
  active: Boolean
});

module.exports = mongoose.model('Cart', cart);
