var Cart = require("../model/model-cart.js");

exports.validateCart = (cartId) => {
    console.log('_________ validateCart ________');

    new promise(function (resolve, reject) {

        Cart.findById(cartId, function (err, cart) {

            if (!cart || cart.status == "close") {
                reject()
            } else {
                resolve()
            }

        });

    })


};