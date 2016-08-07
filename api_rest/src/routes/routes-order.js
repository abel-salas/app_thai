var middleware = require("./middleware.js");
var controller = require("../controller/controller-order.js");


module.exports = function(app, request) {

    /* POST create order inside cart  */
    app.post('/order/create/', controller.createOrder);

    /* POST close order */
    app.post('/order/close/', controller.postCloseOrder);

    /* GET order by id cart  */
    app.get('/order/cart/:cartId', controller.getOrderByCartId);

}
