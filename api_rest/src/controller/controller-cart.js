const Cart = require("../model/model-cart.js");
const common = require("../common/response.decorator.js");

exports.createCart = (req, res) => {
    console.log('_________ Post create cart ________');

    Cart.find({active: 'true'}, function (err, cart) {

        if (cart.length > 0) {
            common.responseDecorator(err, res, cart, 'Return cart active')
        } else {

            var cart = new Cart({
                active: 'true',
                openCurrency: {
                    coins: req.body.coins,
                    dollars: req.body.dollars,
                    total: req.body.total
                }.body.openCurrency,
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

exports.closeCart = (req, res) => {
    console.log('________ Post close cart ________', req.params.id);

    Cart.findById(req.params.id, (err, cart) => {

        cart.active = 'false';
        cart.closeCurrency = req.body.closeCurrency;
        cart.closed = new Date();
        cart.currency = req.body.currency;

        cart.totalCart = (cart.random + cart.closeCurrency) - cart.openCurrency;
        cart.restCart = cart.totalCart - cart.summary.dollars;

        cart.save((err, response) => common.responseDecorator(err, res, cart, 'Cart Close'))

    });

};

