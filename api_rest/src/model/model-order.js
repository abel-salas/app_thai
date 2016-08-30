var mongoose = require('mongoose');

/*
 *  ------  order  --------
 *  Define model collection
 */

var order = mongoose.Schema({
    billNumber: Number,
    userId: String,
    cartId: String,
    active: Boolean,
    orderlines: Array,
    totalOrder: Number,
    payment: String,
    created: Date
});

module.exports = mongoose.model('Order', order);
