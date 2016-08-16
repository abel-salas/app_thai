const IP_API = 'http://127.0.0.1';
const PORT = ':8082';

export default class ProductService {
    constructor($http, $log, $q) {
        this.$http = $http
        this.$log = $log
        this.$q = $q
    }

    getProducts() {
        var deferred = this.$q.defer();
        this.$http.get(IP_API + PORT + '/products/')
            .then(response => deferred.resolve(response.data.content.data))
            .catch(error => deferred.reject(error));
        return deferred.promise;
    }

    getProduct(id) {
        var deferred = this.$q.defer();
        this.$http.get(IP_API + PORT + '/product/' + id)
            .then(response => deferred.resolve(response.data.data))
            .catch(error => deferred.reject(error))
        return deferred.promise;
    }

    createProduct(product) {
        return this.$http.post(IP_API + PORT + '/product', product)
    }

    editProduct(product) {
        return this.$http.put(IP_API + PORT + '/product/' + product._id, product)
    }

    deleteProduct(product) {
        return this.$http.delete(IP_API + PORT + '/product/' + product._id)
    }

}
