var mongoose = require('mongoose');

/*
 *  ------  order  --------
 *  Define model collection
 */

var order = mongoose.Schema({
    userId: String,
    cartId: String,
    active: Boolean,
    orderline: Array,
    currency: {
        coins: Number, // B
        card: Number,
        dollars: Number
    },
    created: Date
});

module.exports = mongoose.model('Order', order);
