const IP_API = 'http://127.0.0.1';
const PORT = ':8082';

export default class OrderService {
    constructor($http, $log, $q) {
        this.$http = $http;
        this.$log = $log;
        this.$q = $q;

        this.OnInit();
    }

    OnInit() {
        this.user = undefined;
        this.orderlines = {
            services: [],
            products: []
        };
        this.totalOrder = 0;
    }

    createOrder(payment) {
        this.$log.log('=> ', this.cartId && this.user && this.orderlines.services.length > 0 || this.orderlines.products.length > 0)

        if (payment &&
            this.cartId &&
            this.user &&
            this.orderlines.services.length > 0 ||
            this.orderlines.products.length > 0) {

            let order = {
                cartId: this.cartId,
                userId: this.user._id,
                orderlines: this.orderlines,
                payment: payment,
                totalOrder: this.totalOrder
            }

            this.$http.post(IP_API + PORT + '/order/create/', order)
                .then(res => {
                    this.$log.log('Order Created success', res);
                    Materialize.toast('Su orden a sido procesada correctamente!', 3000);
                    this.OnInit();
                })
                .catch(error => Materialize.toast('Hemos tenido un error al procesar la orden!', 3000));
        } else {
            Materialize.toast('Falta algun campo por rellenar para enviar el recibo!', 3000);
        }
    };

    sendIdCart(id) {
        this.cartId = id;
    }

    sendUser(user) {
        this.user = user;
    }

    sendProductOrderline(product) {
        if (this.cartId && this.user) {
            this.orderlines.products.push(product);
            this.countTotalPriceOrder();
        } else {
            Materialize.toast('Primero debes seleccionar un Cliente!', 3000);
        }
    }

    sendServiceOrderline(service) {
        if (this.cartId && this.user) {
            this.orderlines.services.push(service);
            this.countTotalPriceOrder();
        } else {
            Materialize.toast('Primero debes seleccionar un Cliente!', 3000);
        }
    }

    removeServiceOrderline(index) {
        this.orderlines.services.splice(index, 1);
        this.countTotalPriceOrder();
    }

    removeProductOrderline(index) {
        this.orderlines.products.splice(index, 1);
        this.countTotalPriceOrder();
    }

    countTotalPriceOrder() {
        let products = 0;
        let services = 0;
        this.orderlines.products.forEach(elem => services = services + elem.price);
        this.orderlines.services.forEach(elem => products = products + elem.price);
        this.totalOrder = products + services;
    }

}
