var middleware = require("./middleware.js");
var controller = require("../controller/controller-cart.js");


module.exports = function(app, request) {

  /* POST create cart */
  app.post('/cart/create/', controller.createCart);

  /* GET cart */
  app.get('/cart/active/', controller.getCart);

  /* GET cart */
  app.get('/cart/id/:id', controller.getCartById);

  /* GET All carts */
  app.get('/cart/all/', controller.getAllCarts);

  /* POST close cart */
  app.post('/cart/close/:id', controller.closeCart);

  /* PUT add Result cart */
  app.put('/cart/addResult/:id', controller.addResultCart);

}
