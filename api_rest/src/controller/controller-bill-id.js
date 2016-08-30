/**
 * Created by abel on 30/08/16.
 */

const BillNumber = require("../model/model-bill-number.js");
const common = require("../common/response.decorator.js");

exports.initBillId = (req, res) => {
    console.log('_________ Post init Bill Id ________');

    var billNumber = new BillNumber({
        billNumber: req.params.number
    });

    billNumber.save((err, response) => common.responseDecorator(err, res, response, 'Init bill Number'))

};

exports.setBillNumber = (req, res) => {
    console.log('_________ set Bill Number ________');

    BillNumber.find({}, function (err, obj) {
        console.log('number bill ', obj[0].billNumber);
        obj[0].billNumber = obj[0].billNumber + 1;
        obj[0].save();
    });

};
