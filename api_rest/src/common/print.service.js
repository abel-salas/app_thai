/**
 * Created by abel on 23/08/16.
 */
const User = require("../model/model-user.js");
const printer = require("node-thermal-printer");

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
    console.log('PRINTER CODE THAI');
    /*
    * https://www.npmjs.com/package/node-thermal-printer
    */
    printer.init({
        type: 'bixolon',
        interface: '/dev/usb/lp0'
    });

    printer.alignCenter();
    printer.isPrinterConnected( isConnected => {
        if(isConnected){

            console.log('Conection Printer Success', isConnected)
            printer.println(ticket.title);
            printer.println(ticket.telf);
            printer.println(ticket.city);
            printer.println(ticket.address);
            printer.println(ticket.date);
            printer.print(ticket.name);
            printer.print(' ');
            printer.print(ticket.lastName);
            ticket.services.forEach(obj => {
                printer.println(obj.name);
                printer.println('-');
                printer.print(obj.type);
                printer.print('-');
                printer.print(obj.brand);
                printer.print('-');
                printer.print('precio = ');
                printer.println(obj.price);
            })
            ticket.products.forEach(obj => {
                printer.println(obj.name);
                printer.println('-');
                printer.print(obj.type);
                printer.print('-');
                printer.print(obj.brand);
                printer.print('-');
                printer.print('precio = ');
                printer.println(obj.price);
            })
            printer.println(' - - - - - - - - - - - - - - ');
            printer.println('TOTAL RECIVO = ');
            printer.println(ticket.total);
            printer.println(' ');
            printer.println(' ');
            printer.println(' ');
            printer.leftRight("Left", "Right");                 // Prints text left and right
            printer.table(["One", "Two", "Three"]);             // Prints table equaly
            printer.tableCustom([                               // Prints table with custom settings (text, align, width, bold)
                {text: "Left", align: "LEFT", width: 0.5},
                {text: "Center", align: "CENTER", width: 0.25, bold: true},
                {text: "Right", align: "RIGHT", width: 0.25}
            ]);

            printer.cut();
            printer.execute();
        } else {
            console.log('Connection Printer Error!');
        }
    });
};
