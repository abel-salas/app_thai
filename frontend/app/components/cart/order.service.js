const IP_API = 'http://127.0.0.1';
const PORT = ':8082';

export default class OrderService {
    constructor($http, $log, $q) {
        this.$http = $http;
        this.$log = $log;
        this.$q = $q;

        this.OnInit();
    }

    OnInit(){
        this.cartId = undefined;
        this.user = undefined;
        this.orderlines = {
            services: [],
            products: []
        };
        this.totalOrder = 0;
    }

    createOrder(cart) {
        var deferred = this.$q.defer();

        if (this.CartId && this.user && (this.orderlines.services.length > 0 || this.orderlines.products.length > 0)) {

            let order = {
                cartId: this.cartId,
                userId: this.user._id,
                orderlines: obj.orderlines,
                currency: obj.currency
            }

            this.$http.post(IP_API + PORT + '/order/create/', order)
                .then(res => {
                    this.$log.log('crear carrito', res);
                    deferred.resolve(res.data.data)
                })
                .catch(error => deferred.reject(error));
        }

        return deferred.promise;
    };

    getCart() {
        var deferred = this.$q.defer();
        this.$http.get(IP_API + PORT + '/cart/')
            .then(res => {
                if (res.data.data[0]) {
                    deferred.resolve(res.data.data[0])
                } else {
                    deferred.reject()
                }
            })
            .catch(error => deferred.reject(error));
        return deferred.promise;
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
        } else{
            Materialize.toast( 'Primero debes seleccionar un Cliente!', 3000);
        }
    }

    sendServiceOrderline(service) {
        if (this.cartId && this.user) {
            this.orderlines.services.push(service);
        } else{
            Materialize.toast( 'Primero debes seleccionar un Cliente!', 3000);
        }
    }

    removeServiceOrderline(index) {
        this.orderlines.services.splice(index, 1);
    }

    removeProductOrderline(index) {
        this.orderlines.products.splice(index, 1);
    }


}
