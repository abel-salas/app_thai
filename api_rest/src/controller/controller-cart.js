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

exports.closeCart = (req, res) => {
    console.log('________ Post close cart ________');

    Order.find({cartId: req.params.id}, function (err, order) {


        if (err) {
            return res.status(res.statusCode).json({
                message: err.toString(),
                name: 'hemos tenido un error al buscar referencias sobre este carrito'
            });
        } else {

            Cart.findById(req.params.id, function (err, cart) {
                cart.active = 'false';
                cart.closeCurrency = req.body.totalCurrency;
                cart.resultCurrency = cart.closeCurrency - cart.openCurrency;
                cart.closed = new Date();

                cart.save((err, response) => common.responseDecorator(err, res, cart, 'Cart Close'));
            });

        }

    });

};


function addTotalPaymentsByCart(order) {

    var totalTarjeta, totalEfectivo, totalMixto;
    console.log('empieza el calculo >>>>>>>>>>>>>>>>>>>>>>>');
    order.forEach(obj => {
        console.log('----- ForEach ---- la order => ', obj);
        switch (obj.payment) {
            case 'Tarjeta':
                totalTarjeta = totalTarjeta + obj.totalOrder;
                break;

            case 'Efectivo':
                totalEfectivo = totalEfectivo + obj.totalOrder;
                break;

            case 'Mixto':
                totalMixto = totalMixto + obj.totalOrder;
                break;
        }
    });

    var totalPayments = {
        totalTarjeta: totalTarjeta,
        totalEfectivo: totalEfectivo,
        totalMixto: totalMixto
    }

    console.log('acaba el calculo >>>>>>>>>>>>>>>>>>>>>>>', totalPayments);
    return totalPayments;
};