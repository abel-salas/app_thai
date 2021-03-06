var mongoose = require('mongoose');


/*
 *  ------  SERVICE  --------
 *  Define model collection
 */

var service = mongoose.Schema({
    name: String,
    type: String,
    price: Number,
    gender: String,
    img: Object,
    description: String,
    created: Date,
    modified: Date
});
module.exports = mongoose.model('Service', service);
