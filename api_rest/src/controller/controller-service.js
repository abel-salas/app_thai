var Service = require("../model/model-service.js");


exports.getService = (req, res) => {

  Service.findById(req.params.id, function (err, user) {

    callbackResponse(err, res, user);

  });

}

exports.getAllServices = function(req, res) {

  Service.find({}, function (err, AllServices) {

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
      message: 'too coorrecto',
      data: AllServices
    });

  });

};


exports.addService = function(req, res) {

  var service = new Service({
    "name": req.body.name,
    "type": req.body.type,
    "price": req.body.price,
    "brand": req.body.brand,
    "img": req.body.img,
    "description": req.body.description,
    "created": new Date()
  });

  service.save(function(err, response){
    if (!err) {
      res.send({
        status: response.statusCode,
        content: {
          message: 'Service saved',
          data: response
        }
      });
    } else {
      console.log('ERROR: ' + err);
      res.send('ERROR - Post add SERVICE');
    }
  })

};


exports.updateService = function(req, res){

  Service.findById(req.params.id, function (err, service) {
      service.name = req.body.name;
      service.type = req.body.type;
      service.price = req.body.price;
      service.brand = req.body.brand;
      service.img = req.body.img;
      service.description = req.body.description;
      service.modified = new Date();

    service.save(function(err, response){
      if (!err) {
        res.send({
          status: response.statusCode,
          content: {
            message: 'service saved',
            data: response
          }
        });
      } else {
        console.log('ERROR: ' + err);
        res.send('ERROR - Update SERVICE');
      }
    });

  });
};


exports.deleteService = function(req, res) {
  console.log('DELETE Service');

  Service.findById(req.params.id, function (err, service) {
    service.remove(function(err, response){
      if (!err) {
        res.send({
          status: response.statusCode,
          content: {
            message: 'SUCCESS - remove SERVICE',
            data: response
          }
        });
      } else {
        console.log('ERROR: ' + err);
        res.send('ERROR - remove SERVICE');
      }
    });

  });

};

function callbackResponse(err,res,data){

  var statusCode = 200;
  var message = "Ok";

  if (err) {
    return res.status(400).json({
      status: 400,
      message: err.toString()
    });
  }

  res.status(statusCode).json({
    message: message,
    data: data
  });
};