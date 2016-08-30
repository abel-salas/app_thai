/**
 * Created by abel on 30/08/16.
 */

var mongoose = require('mongoose');

/*
 *  ------  order id bill --------
 *  Define model collection
 */

var billNumber = mongoose.Schema({
    billNumber: Number
});

module.exports = mongoose.model('BillNumber', billNumber);
