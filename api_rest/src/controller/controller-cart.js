const Cart = require("../model/model-cart.js");
const common = require("../common/response.decorator.js");


exports.createCart = (req, res) => {
    console.log('_________ Post create cart ________');

    var cart = new Cart({
        status: 'true',
        openCurrency: req.body.openCurrency,
        created: new Date()
    });

    cart.save((err, response) => common.responseDecorator(err, res, response, 'Cart Create'))

};


exports.closeCart = (req, res) => {
    console.log('________ Post close cart ________', req.params.id);

    Cart.findById(req.params.id, (err, cart) => {

        cart.status = 'false';
        cart.closeCurrency = req.body.closeCurrency;
        cart.random = req.body.random;
        cart.closed = new Date();
        cart.summary = req.body.summary;

        cart.totalCart = (cart.random + cart.closeCurrency) - cart.openCurrency;
        cart.restCart = cart.totalCart - cart.summary.dollars;

        console.log('=========> ',cart,'=========> ',(cart.random + cart.closeCurrency) - cart.openCurrency);

            common.responseDecorator(err, res, cart, 'Cart Close');

    });

};

