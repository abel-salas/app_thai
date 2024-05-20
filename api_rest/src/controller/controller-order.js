const Order = require("../model/model-order.js");
const BillNumber = require("../model/model-bill-number.js");
const common = require("../common/response.decorator.js");
const servicePrint = require("../common/print.service.js");
const controllerOrderNumber = require("../controller/controller-bill-id.js");

exports.createOrder = (req, res) => {
    console.log('_________ Post create Order ________');

    BillNumber.find({}, function (err, obj) {
        console.log('number bill ', obj);

        var order = new Order({
            billNumber: obj[0].billNumber + 1,
            cartId: req.body.cartId,
            userId: req.body.userId,
            orderlines: req.body.orderlines,
            payment: req.body.payment,
            totalOrder: req.body.totalOrder,
            active: 'false',
            created: new Date()
        });

        order.save((err, response) => {
            if(!err){
                servicePrint.printOrder(response);
                controllerOrderNumber.setBillNumber();
            }
            common.responseDecorator(err, res, response, 'Order Create')
        })

    });

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

exports.getOrdersByUser = (req, res) => {
    console.log('_________ getOrdersByUser ________', req.params.userId);

    Order.find({userId: req.params.userId}, function (err, order) {

        console.log(err, order)
        if (order.length >= 0) {
            common.responseDecorator(err, res, order, 'Return all order by user')
        } else {
            common.responseDecorator(err, res, order, 'User doesn t orders')
        }

    })

};

exports.getAllOrders = (req, res) => {
    console.log('_________ get getAllOrders ________');

    Order.find({}, function (err, order) {

        if (order.length >= 0) {
            common.responseDecorator(err, res, order, 'Return all order by cart')
        } else {
            common.responseDecorator(err, res, order, 'Cart doesn t orders')
        }

    })

};


