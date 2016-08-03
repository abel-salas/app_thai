var mongoose = require('mongoose');

/*
 *  ------  cart  --------
 *  Define model collection
 */

var cart = mongoose.Schema({
  openCurrency: Number,
  closeCurrency: Number,
  resultCart: Number,
  random: Number, // B
  created: Date,
  closed: Date,
  status: Boolean,
  summary: {
    card: Number,
    dollars: Number
  },
  totalCart: Number,
  restCart: Number
});

module.exports = mongoose.model('Cart', cart);
