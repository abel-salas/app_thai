const common = require("../common/response.decorator.js");
const statUser = require("../common/statistics-user.js");
const statOrder = require("../common/statistics-order.js");
const statCart = require("../common/statistics-cart.js");

exports.statisticsDashboard = (req, res) => {
    console.log('_________  Get statisticsDashboard  ________');

    statUser.numberNewUsers().then(resultUsers => {

        statOrder.countOrderlines().then(resultOrders => {
            var obj = {
                'users':  resultUsers,
                'orders': resultOrders
            }

            statOrder.returnStadistics().then(response => {
                obj.ordersLastYear = response;

                statCart.returnStadistics().then(response => {
                    obj.cartsLastYear = response;

                    common.responseDecorator(false, res, obj, 'Statistics dashboard');
                })
            })
        })
    })

};