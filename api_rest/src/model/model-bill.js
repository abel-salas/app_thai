var mongoose = require('mongoose');

/*
 *  ------  bill --------
 *  Define model collection
 */

var bill = mongoose.Schema({
  number: String,
  nameBusines: String,
  methodPayment: String,
  datePayment: Date,
  importBase: Number,
  importTotal: Number,
  created: Date
});

module.exports = mongoose.model('Bill', bill);
