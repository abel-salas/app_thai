var controller = require("../controller/controller-user.js");

module.exports = function(app, request) {

  /*
   * GET USER
   */

  app.get('/user/:id', controller.getUser);


  /*
   * GET ALL USERS
   */

  app.get('/users/', controller.getAllUser);


  /*
   *  CREATE USER
   */

  app.post('/user/create', controller.createUser);


  /*
   *  UPDATE USER
   */

  app.put('/user/update/:id', controller.updateUser);


  /*
   *  DELETE USER
   */

  app.delete('/user/delete/:id', controller.deleteUser);

}
