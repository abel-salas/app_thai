var controller = require("../controller/controller-auth.js");

module.exports = function(app, request) {

    /*
     * Login
     */

    app.post('/auth/login/', controller.login);


    /*
     *  Logout
     */

    app.post('/auth/logout/', controller.logout);


    /*
     *  Authenticate
     */

    app.get('/auth/authenticated/', controller.authenticated);


}