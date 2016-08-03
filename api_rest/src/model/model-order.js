var mongoose = require('mongoose');

/*
 *  ------  order  --------
 *  Define model collection
 */

var order = mongoose.Schema({

    created: Date
});

module.exports = mongoose.model('Order', order);
