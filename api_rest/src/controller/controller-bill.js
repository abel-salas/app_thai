const Bill = require("../model/model-bill.js");
const common = require("../common/response.decorator.js")
var Promise = require('promise');


exports.createBill = (req, res) => {
    console.log('_________ Post create bill ________');

    var bill = new Bill({
      number: req.body.number,
      nameBusines: req.body.nameBusines,
      methodPayment: req.body.methodPayment,
      datePayment: req.body.datePayment,
      importBase: req.body.importBase,
      importTotal: req.body.importTotal,
      created: new Date
    });

    bill.save((err, response) => common.responseDecorator(err, res, response, 'Bill Create'))

};

exports.getBillById = (req, res) => {
    console.log('_________ Get bill  by Id________');

    Bill.findById(req.params.id, function (err, bill) {
        common.responseDecorator(err, res, bill, 'This Bill By Id')
    });

};

exports.getAllBills = (req, res) => {
    console.log('_________ Get All bills ________');

    Bill.find({}, function (err, bills) {
        common.responseDecorator(err, res, bills, 'All Bills')
    });

};
