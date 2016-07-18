var Cart = require("../model/model-cart.js");


exports.getAllcarts = function(req, res) {
  console.log('__________ get all carts __________');

  Cart.find({}, function (err, cart) {

    if (err) {
      return res.status(400).json({
        status: 400,
        content: {
            message: err.toString()
        }
      });
    }

    res.status(res.statusCode).json({
      status: res.statusCode,
      content: {
        message: 'too coorrecto',
        data: cart
      }
    });

  });

};


exports.addcart = function(req, res) {
  console.log('______________ Post add cart ______________');

  var cart = new cart({
    "name": req.body.name,
    "type": req.body.type,
    "price": req.body.price,
    "brand": req.body.brand,
    "stock": req.body.stock,
    "description": req.body.description,
    "created": new Date()
  });

  Cart.save(function(err, response){
    if (!err) {
      res.send({
        status: response.statusCode,
        content: {
          message: 'cart saved',
          data: response
        }
      });
    } else {
      console.log('ERROR: ' + err);
      res.send('ERROR - Post add cart');
    }
  })

};


exports.updatecart = function(req, res){
  console.log('UPDATE cart', req.body);

  Cart.findById(req.params.id, function (err, cart) {
      cart.name = req.body.name;
      cart.type = req.body.type;
      cart.price = req.body.price;
      cart.brand = req.body.brand;
      cart.stock = req.body.stock;
      cart.description = req.body.description;
      cart.modified = new Date();

    cart.save(function(err, response){
      if (!err) {
        res.send({
          status: response.statusCode,
          content: {
            message: 'cart saved',
            data: response
          }
        });
      } else {
        console.log('ERROR: ' + err);
        res.send('ERROR - Update cart');
      }
    });

  });
};


exports.deletecart = function(req, res) {
  console.log('DELETE cart');

  Cart.findById(req.params.id, function (err, cart) {
    cart.remove(function(err, response){
      if (!err) {
        res.send({
          status: response.statusCode,
          content: {
            message: 'SUCCESS - remove cart',
            data: response
          }
        });
      } else {
        console.log('ERROR: ' + err);
        res.send('ERROR - remove cart');
      }
    });

  });

};

