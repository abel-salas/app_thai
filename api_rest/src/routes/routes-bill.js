var middleware = require("./middleware.js");
var controller = require("../controller/controller-bill.js");


module.exports = function(app, request) {

  /* POST create bill */
  app.post('/bill/create/', controller.createBill);

  /* GET bill by Id */
  app.get('/bill/id/:id', controller.getBillById);

  /* GET All bills */
  app.get('/bill/all/', controller.getAllBills);

}
