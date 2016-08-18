const IP_API = 'http://127.0.0.1';
const PORT = ':8082';

export default class CartService {
    constructor($http, $log, $q, OrderService) {
        this.$http = $http;
        this.$log = $log;
        this.$q = $q;
        this.OrderService = OrderService;
    }

    createCart(currency) {
        var deferred = this.$q.defer();
        this.$http.post(IP_API + PORT + '/cart/create/', {totalCurrency: currency})
            .then(res => {
                deferred.resolve(res.data.data)
                this.OrderService.sendIdCart(res.data.data._id);
            })
            .catch(error => deferred.reject(error));
        return deferred.promise;
    };

    getCart() {
        var deferred = this.$q.defer();
        this.$http.get(IP_API + PORT + '/cart/')
            .then(res => {
                if(res.data.data[0]){
                    deferred.resolve(res.data.data[0])
                    this.OrderService.sendIdCart(res.data.data[0]._id);
                } else {
                    deferred.reject()
                }
            })
            .catch(error => deferred.reject(error));
        return deferred.promise;
    };

    closeCart(id, currency) {
        var deferred = this.$q.defer();
        this.$http.post(IP_API + PORT + '/cart/close/' + id, {totalCurrency: currency})
            .then(res => deferred.resolve(res.data.data))
            .catch(error => deferred.reject(error));
        return deferred.promise;
    }

}
