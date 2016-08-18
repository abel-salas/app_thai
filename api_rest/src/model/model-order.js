var mongoose = require('mongoose');

/*
 *  ------  order  --------
 *  Define model collection
 */

var order = mongoose.Schema({
    userId: String,
    cartId: String,
    active: Boolean,
    orderlines: Array,
    totalOrder: Number,
    payment: String,
    created: Date
});

module.exports = mongoose.model('Order', order);
