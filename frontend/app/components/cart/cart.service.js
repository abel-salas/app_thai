const IP_API = 'http://127.0.0.1';
const PORT = ':8082';

export default class CartService {
    constructor($http, $log, $q) {
        this.$http = $http
        this.$log = $log
        this.$q = $q
    }

    createCart(cart) {
        var deferred = this.$q.defer();
        this.$http.post(IP_API + PORT + '/cart/create/', cart)
            .then(res => {
                this.$log.log('crear carrito', res);
                deferred.resolve(res.data.data)
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
                } else {
                    deferred.reject()
                }
            })
            .catch(error => deferred.reject(error));
        return deferred.promise;
    };

    closeCart(cart) {
        var deferred = this.$q.defer();
        this.$http.post(IP_API + PORT + '/cart/close/' + cart._id, cart)
            .then(res => {
                this.$log.debug('Close Cart ', res)
                deferred.resolve(res.data)
            })
            .catch(error => deferred.reject(error));
        return deferred.promise;
    }

}
