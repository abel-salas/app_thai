const Order = require("../model/model-order.js");
const common = require("../common/response.decorator.js");
const cartService = require("../common/cart.service.js");


exports.createOrder = (req, res) => {
    console.log('_________ Post create Order ________');

    cartService.validateCart(req.body.cartId)
        .then(() => {

            var order = new Order({
                cartId: req.body.cartId,
                userId: req.body.userId
            });

            order.save((err, response) => common.responseDecorator(err, res, req.body, 'Order Create'))

        })
        .catch(() => {

            res.status(400)
            res.send("Cart doesn't exist or is closed")

        })

};


