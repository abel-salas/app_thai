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
            nif: "Nif: 38852399-V",
            telf: "Telf: 697 87 36 52",
            city: "08380 - Malgrat de mar",
            address: "Carrer girona, 69",
            billNumber: obj.billNumber,
            date: obj.created,
            name: user.name + ' ' + user.lastName,
            services: obj.orderlines[0].services,
            products: obj.orderlines[0].products,
            total: obj.totalOrder
        };

        if(print){
            console.log('Send Printer Order => ');
            sendPrinter(ticket);
        }

    });

};

exports.printCart = (obj) => {
    console.log('Send Printer Cart',obj);
    
    var ticket = {
        title: "Estética Thai",
        telf: "Telf: 697 87 36 52",
        city: "08380 - Malgrat de mar",
        address: "Carrer girona, 69",
        nif: "Nif: 38852399-V",
        cartId: obj._id,
        closed: obj.closed,
        totalCard: obj.totalPayments.totalTarjeta,
        totalEfectivo: obj.totalPayments.totalEfectivo,
        total: obj.totalPayments.totalTarjeta + obj.totalPayments.totalEfectivo,
        date: obj.closed
    };

    printer.init({
        type: 'bixolon',
        interface: '/dev/usb/lp1'
    });

    printer.isPrinterConnected( isConnected => {
        if(isConnected){

            console.log('Conection Printer Success', isConnected)

            printer.setTextDoubleWidth();
            printer.println(ticket.title);

            printer.setTextNormal();
            printer.println(ticket.nif);
            printer.println(ticket.telf);
            printer.println(ticket.city);
            printer.println(ticket.address);

            printer.println(ticket.date); 

            printer.println(" "); 

            printer.setTextNormal();

            printer.println("ID caja"); 
            printer.println(ticket.cartId);

            printer.println(" "); 

            printer.tableCustom([
                {text: 'Total Tarjeta', align: "LEFT", width: 0.5, bold: true},
                {text: ticket.totalCard, align: "RIGHT", width: 0.1, bold: true}
            ]);
            printer.println(" "); 
            printer.tableCustom([
                {text: 'Total Efectivo', align: "LEFT", width: 0.5, bold: true},
                {text: ticket.totalEfectivo, align: "RIGHT", width: 0.1, bold: true}
            ]);
            printer.println(" "); 
            printer.underlineThick(true); // line
            printer.tableCustom([
                {text: 'Total Caja', align: "LEFT", width: 0.4, bold: true},
                {text: ticket.total, align: "RIGHT", width: 0.2, bold: true}
            ]);
            printer.underlineThick(false); // line
            printer.println(" "); 
           
            printer.cut();
            printer.execute();
        } else {
            printer.println('ERROR CONECTION');
        }
    });
};


function sendPrinter(ticket){
    console.log('PRINTER CODE THAI');

    printer.init({
        type: 'bixolon',
        interface: '/dev/usb/lp1'
    });

    printer.isPrinterConnected( isConnected => {
        if(isConnected){

            console.log('Conection Printer Success', isConnected)

            printer.setTextDoubleWidth();
            printer.println(ticket.title);

            printer.setTextNormal();
            printer.println(ticket.nif);
            printer.println(ticket.telf);
            printer.println(ticket.city);
            printer.println(ticket.address);

            printer.println(ticket.date); 

            printer.println(" "); 

            printer.tableCustom([
                {text: 'Factura: ', align: "LEFT", width: 0.2, bold: true},
                {text: ticket.billNumber, align: "RIGHT", width: 0.2, bold: true}
            ]);

            printer.println(ticket.name);

            printer.println(" "); 

            if (ticket.services) {
                printer.println("Servicios: "); 
            }
            
            ticket.services.forEach(obj => {                
                printer.tableCustom([
                    {text: obj.name, align: "LEFT", width: 0.53, bold: true},
                    {text: obj.price, align: "RIGHT", width: 0.1}
                ]);
            })

            printer.println(" "); 
            
            if (ticket.products) {
                printer.println("Productos: ");             
            }
            
            ticket.products.forEach(obj => {
                printer.tableCustom([
                    {text: obj.name, align: "LEFT", width: 0.53, bold: true},
                    {text: obj.price, align: "RIGHT", width: 0.1}
                ]);
            })
        
            printer.println(" "); 
            printer.println(" "); 

            printer.setTextDoubleWidth();
            printer.underlineThick(true); // line
            printer.tableCustom([
                {text: 'TOTAL ', align: "LEFT", width: 0.15, bold: true},
                {text: ticket.total, align: "RIGHT", width: 0.15, bold: true}
            ]);
            printer.underlineThick(false); // line
            printer.println(" "); 
            printer.println(" "); 

            printer.alignCenter(); 
            printer.println("Gracies per la   seva Visita"); 

            printer.println(" "); 
            printer.println(" "); 

            printer.cut();
            printer.execute();
        } else {
            printer.println('ERROR CONECTION');
        }
    });
};
