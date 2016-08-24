/**
 * Created by abel on 23/08/16.
 */
const User = require("../model/model-user.js");

exports.printOrder = (obj) => {
    var print;
    switch (obj.payment){
        case "Tarjeta":
            print = 'true';
            break;
        case "Efectivo":
            print = 'true';
            break;
        case "Mixto":
            return;
            break;
    }

    User.findById(obj.userId, function (err, user) {

        var ticket = {
            title: "Estética Thai",
            telf: "000 000 000",
            city: "Malgrat de mar",
            address: "carrer girona, 69",

            date: obj.created,
            name: user.name,
            lastName: user.lastName,
            services: obj.orderlines[0].services,
            products: obj.orderlines[0].products,
            total: obj.totalOrder
        };

        if(print){
            console.log('Send Printer Order => ', print, ticket);
            sendPrinter(ticket);
        }


    });

};

exports.printCart = (obj) => {

    var ticket = {
        title: "Estética Thai",
        telf: "000 000 000",
        city: "Malgrat de mar",
        address: "carrer girona, 69",
        cartId: obj._id,
        closed: obj.closed,
        totalCard: obj.totalPayments.totalTarjeta,
        totalEfectivo: obj.totalPayments.totalEfectivo,
        total: obj.resultCurrency - obj.totalPayments.totalMixto
    };

    console.log('Send Printer Cart', ticket);
    sendPrinter(ticket);
};


function sendPrinter(ticket){
    console.log('PRINTER CODE');
    /*
    * Printer code module termic
    * https://www.npmjs.com/package/node-thermal-printer
    *
    * https://www.npmjs.com/package/thermalprinter / segunda opcion
    */
};