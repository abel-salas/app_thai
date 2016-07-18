var middleware = require("./middleware.js");
var controller = require("../controller/controller-cart.js");


module.exports = function(app, request) {

  /*
   * GET cartS
   */

  app.get('/cart/', controller.getAllcarts);


  /*
   *  cart POST
   */

  app.post('/cart/', controller.addcart);


  /*
   *  cart UPDATE
   */

  app.put('/cart/:id', controller.updatecart);


  /*
   *  cart DELETE
   */

  app.delete('/cart/:id', controller.deletecart);


}
