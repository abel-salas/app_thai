const Order = require("../model/model-order.js");
const common = require("../common/response.decorator.js");


exports.createOrder = (req, res) => {
    console.log('_________ Post create Order ________');

    Order.find({active: 'true'}, function (err, order) {

        console.log(err, order)

        if (order.length > 0) {
            common.responseDecorator(err, res, order, 'Order user exist return old orderUser')
        } else {

            var order = new Order({
                cartId: req.body.cartId,
                userId: req.body.userId,
                orderlines: req.body.orderlines,
                currency: req.body.currency,
                active: 'true',
                create: new Date()
            });

            order.save((err, response) => common.responseDecorator(err, res, response, 'Order Create'))
        }

    })

};

exports.getOrderByCartId = (req, res) => {
    console.log('_________ get getOrderByCartId  ________');

    Order.find({cartId: req.params.cartId}, function (err, order) {

        if (order.length >= 0) {
            common.responseDecorator(err, res, order, 'Return all order by cart')
        } else {
            common.responseDecorator(err, res, order, 'Cart doesn t orders')
        }

    })

};

exports.postCloseOrder = (req, res) => {
    console.log('_________ Post close Order ________', req.params.cartId);

    Order.findById(req.body.orderId, function (err, order) {

        console.log(err, order)

        if (order == 'undefined') {
            common.responseDecorator(err, res, order, 'Order doesn t exist')
        } else {

            order.active = 'false';
            order.save((err, response) => common.responseDecorator(err, res, response, 'Order Closed'))

        }

    })

};


