/**
 * Created by abel on 10/10/16.
 */
const Cart = require("../model/model-cart.js");
const commonService = require("./last-year.service.js");

exports.returnStadistics = () => {
    return new Promise(function (resolve, reject) {
        commonService.arrayLastYear().then(array => {
            Promise.all([
                cartLastMonths(array[0]),
                cartLastMonths(array[1]),
                cartLastMonths(array[2]),
                cartLastMonths(array[3]),
                cartLastMonths(array[4]),
                cartLastMonths(array[5]),
                cartLastMonths(array[6]),
                cartLastMonths(array[7]),
                cartLastMonths(array[8]),
                cartLastMonths(array[9]),
                cartLastMonths(array[10]),
                cartLastMonths(array[11])
                ])
                .then(res => resolve(res) )
        });
    });
}

cartLastMonths = (date) => {
    return new Promise(function (resolve, reject) {
        Cart.find({
            "created": {
                "$gte": date.start,
                "$lt": date.end
            }
        }, function (err, data) {
            var totalCurrency = 0;
            var totalTarjeta = 0;
            var totalEfectivo = 0;
            var totalMixto = 0;

            data.forEach(obj => {
                totalCurrency = totalCurrency + obj.resultCurrency;
                totalTarjeta = totalTarjeta + obj.totalPayments.totalTarjeta;
                totalEfectivo = totalEfectivo + obj.totalPayments.totalEfectivo;
                totalMixto = totalMixto + obj.totalPayments.totalMixto;
            });

            resolve({
                'date': date,
                'totalCurrency': totalCurrency,
                'totalPayments': {
                  'totalTarjeta': totalTarjeta,
                  'totalEfectivo': totalEfectivo,
                  'totalMixto': totalMixto
                }
            });
        });
    });
};