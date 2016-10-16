/**
 * Created by abel on 10/10/16.
 */
const Order = require("../model/model-order.js");
const commonService = require("./last-year.service.js");

exports.returnStadistics = () => {
    return new Promise(function (resolve, reject) {
        commonService.arrayLastYear().then(array => {
            Promise.all([
                orderLastMonths(array[0]),
                orderLastMonths(array[1]),
                orderLastMonths(array[2]),
                orderLastMonths(array[3]),
                orderLastMonths(array[4]),
                orderLastMonths(array[5]),
                orderLastMonths(array[6]),
                orderLastMonths(array[7]),
                orderLastMonths(array[8]),
                orderLastMonths(array[9]),
                orderLastMonths(array[10]),
                orderLastMonths(array[11])
                ])
                .then(res => resolve(res) )
        });
    });
}

exports.countOrderlines = () => {
    return new Promise(function (resolve, reject) {

        totalOrderlines('services').then(resServices => {
            totalOrderlines('products').then(resProducts => {

                totaNumberOrderlines(resServices,'services').then(services => {
                    totaNumberOrderlines(resProducts,'products').then(products => {
                        var obj = {
                          'services': services,
                          'products': products
                        }
                        resolve(obj);
                    });
                });
            });
        });

    });
};

totalOrderlines = (property) => {
    return new Promise(function (resolve, reject) {
        var array = [];
        Order.find({}, function (err, data) {
            data.forEach(obj => {
                if (obj.orderlines.length > 0) {
                    obj.orderlines[0][property].forEach(service => {
                        var ifExist = false;
                        array.forEach(value => {
                          if(service._id == value._id) ifExist = true
                        });
                        var obj = {
                          '_id': service._id,
                          'type': service.type,
                          'name': service.name
                        }
                        if (!ifExist) array.push(obj);
                    })
                }
            })
            resolve(array);

        });
    });
};

totaNumberOrderlines = (orderlines,property) => {
    return new Promise(function (resolve, reject) {
        var array = [];

        Order.find({}, function (err, data) {
            orderlines.forEach(order => {
                var count = 0;
                data.forEach(obj => {
                    if (obj.orderlines.length > 0) {
                        obj.orderlines[0][property].forEach(value => {
                            if(order._id == value._id) count ++
                        });
                    };
                });
                order.quantity = count;
                array.push(order);
            });
            resolve(array);
        });

    });
};

orderLastMonths = (date) => {
    return new Promise(function (resolve, reject) {
        Order.find({
            "created": {
                "$gte": date.start,
                "$lt": date.end
            }
        }, function (err, data) {
            var totalMoney = 0;
            var totalOrders = 0;

            data.forEach(obj => {
                totalOrders = totalOrders + obj.orderlines.length;
                if (obj.totalOrder) totalMoney = totalMoney + obj.totalOrder;
            });

            resolve({
                'date': date,
                'totalOrders': totalOrders,
                'totalMoney': totalMoney
            });
        });
    });
};
