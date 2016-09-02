var mongoose = require('mongoose');

/*
 *  ------  order  --------
 *  Define model collection
 */

var orderLine = mongoose.Schema({
    cartId: String,
    userId: String,
    created: Date
});

module.exports = mongoose.model('OrderLine', orderLine);
