var middleware = require("./middleware.js");
var controller = require("../controller/controller-order.js");
var controllerBillNumber = require("../controller/controller-bill-id.js");


module.exports = function(app, request) {

    /* POST create order inside cart  */
    app.post('/order/create/', controller.createOrder);

    /* POST close order */
    app.post('/order/close/', controller.postCloseOrder);

    /* GET order by id cart  */
    app.get('/order/cart/:cartId', controller.getOrderByCartId);

    /* GET order by id cart  */
    app.get('/order/user/:userId', controller.getOrdersByUser);

    /* POST init bill id number */
    app.post('/order/bill/init/:number', controllerBillNumber.initBillId);

    app.get('/order/all/', controller.getAllOrders);

}
