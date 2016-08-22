const Cart = require("../model/model-cart.js");
const Order = require("../model/model-order.js");
const common = require("../common/response.decorator.js");

var Promise = require('promise');

exports.createCart = (req, res) => {
    console.log('_________ Post create cart ________');

    Cart.find({active: 'true'}, function (err, cart) {

        if (cart.length > 0) {
            common.responseDecorator(err, res, cart, 'Return cart active')
        } else {

            var cart = new Cart({
                active: 'true',
                openCurrency: req.body.totalCurrency,
                created: new Date()
            });

            cart.save((err, response) => common.responseDecorator(err, res, response, 'Cart Create'))

        }

    })

};

exports.getCart = (req, res) => {
    console.log('_________ Get cart ________');

    Cart.find({active: 'true'}, function (err, cart) {
        common.responseDecorator(err, res, cart, 'This Cart')
    });

};

exports.getCartById = (req, res) => {
    console.log('_________ Get cart  by Id________');

    Cart.findById(req.params.id, function (err, cart) {
        common.responseDecorator(err, res, cart, 'This Cart By Id')
    });

};

exports.getAllCarts = (req, res) => {
    console.log('_________ Get All carts ________');

    Cart.find({}, function (err, cart) {
        common.responseDecorator(err, res, cart, 'All Carts')
    });

};

exports.closeCart = (req, res) => {
    console.log('________ Post close cart ________');

    Cart.findById(req.params.id, function (err, cart) {
        cart.active = 'false';
        cart.closeCurrency = req.body.totalCurrency;
        cart.resultCurrency = cart.closeCurrency - cart.openCurrency;
        cart.closed = new Date();
        cart.save((err, response) => common.responseDecorator(err, res, cart, 'Cart Close'));
    });

};

exports.addResultCart = (req, res) => {
    console.log('________ Put add result cart ________',req.body);

    Cart.findById(req.params.id, function (err, cart) {
        cart.totalPayments = req.body;
        cart.save((err, response) => common.responseDecorator(err, res, cart, 'Cart Result Saved'));
    });

};
