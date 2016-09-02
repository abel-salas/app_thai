var middleware = require("./middleware.js");
var controller = require("../controller/controller-orderLine.js");


module.exports = function (app, request) {

    /* POST add orderLine */
    app.post('/order/addOrderLine/', controller.addOrderLine);

}
