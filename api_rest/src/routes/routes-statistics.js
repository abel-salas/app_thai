var controller = require("../controller/controller-dashboard.js");

module.exports = function(app, request) {

    app.get('/admin/dashboard/', controller.statisticsDashboard);

}
