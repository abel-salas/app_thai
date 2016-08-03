var middleware = require("./middleware.js");
var controller = require("../controller/controller-order.js");


module.exports = function(app, request) {

    /* POST create order */
    app.post('/order/create/', controller.createOrder);

}
