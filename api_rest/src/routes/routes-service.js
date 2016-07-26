var middleware = require("./middleware.js");
var controller = require("../controller/controller-service.js");


module.exports = function(app, request) {

  /*
   * PRODUCT GET SERVICES
   */

  app.get('/services/', controller.getAllServices);

  /*
   * PRODUCT GET SERVICES
   */

  app.get('/service/:id', controller.getService);


  /*
   *  PRODUCT POST NOTIFICATION
   */

  app.post('/service/', controller.addService);


  /*
   *  PRODUCT UPDATE NOTIFICATION
   */

  app.put('/service/:id', controller.updateService);


  /*
   *  PRODUCT DELETE NOTIFICATION
   */

  app.delete('/service/:id', controller.deleteService);


}
