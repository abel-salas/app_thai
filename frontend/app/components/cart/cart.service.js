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
        this.$http.get(IP_API + PORT + '/cart/active/')
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

    getCartById(id) {
        console.log('getCartById ',id);
        var deferred = this.$q.defer();
        this.$http.get(IP_API + PORT + '/cart/id/' + id)
            .then(res => deferred.resolve(res.data.data))
            .catch(error => deferred.reject(error));
        return deferred.promise;
    };

    closeCart(id, currency) {
        var deferred = this.$q.defer();
        this.$http.post(IP_API + PORT + '/cart/close/' + id, {totalCurrency: currency})
            .then(resClose => {
                this.addResultCloseCart(resClose.data.data._id)
                    .then(resResult => {
                        console.log('resAdd this.addResultCloseCart => ', resResult);
                        this.getAddResultCart(resClose.data.data._id,resResult);
                        deferred.resolve();
                    });
            })
            .catch(error => deferred.reject(error));
        return deferred.promise;
    }

    getAllCarts() {
        var deferred = this.$q.defer();
        this.$http.get(IP_API + PORT + '/cart/all/')
            .then(res => {
                console.log('res.data ',res.data);
                if(res.data.data){
                    deferred.resolve(res.data.data.reverse());
                } else {
                    deferred.reject()
                }
            })
            .catch(error => deferred.reject(error));
        return deferred.promise;
    };

    getAddResultCart(cartId,addResult) {
        this.$http.put(IP_API + PORT + '/cart/addResult/' + cartId, addResult)
            .then(res => {
                console.log('addResult success =>  ',res.data);
            })
            .catch(error => deferred.reject(error));
    };

    addResultCloseCart(cartId){
        var deferred = this.$q.defer();
        console.log('addResultCloseCart >>>>>>>>>>>>>>>>>>>>>>>', cartId);

        var totalPayments = {
            totalTarjeta: 0,
            totalEfectivo: 0,
            totalMixto: 0
        }

        this.OrderService.getAllOrderByCart(cartId)
            .then(res => {
                console.log('res',res);
                 res.forEach(obj => {
                    console.log('----- ForEach ---- la order => ', obj);
                    switch (obj.payment) {
                        case 'Tarjeta':
                            totalPayments.totalTarjeta = totalPayments.totalTarjeta + obj.totalOrder;
                            break;

                        case 'Efectivo':
                            totalPayments.totalEfectivo = totalPayments.totalEfectivo + obj.totalOrder;
                            break;

                        case 'Mixto':
                            totalPayments.totalMixto = totalPayments.totalMixto + obj.totalOrder;
                            break;
                    }
                });

                console.log('acaba el calculo >>>>>>>>>>>>>>>>>>>>>>>', totalPayments);
                deferred.resolve(totalPayments);
            });

        return deferred.promise;

    };

}
