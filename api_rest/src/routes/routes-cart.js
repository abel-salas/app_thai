var middleware = require("./middleware.js");
var controller = require("../controller/controller-cart.js");


module.exports = function(app, request) {

  /* POST create cart */
  app.post('/cart/create/', controller.createCart);

  /* GET cart */
  app.get('/cart/', controller.getCart);

  /* POST close cart */
  app.post('/cart/close/:id', controller.closeCart);


}
