const IP_API = 'http://127.0.0.1';
const PORT = ':8082';

export default class ServiceService {
    constructor($http, $log, $q) {
        this.$http = $http
        this.$log = $log
        this.$q = $q
    }

    getServices(gender) {
        var deferred = this.$q.defer();
        this.$http.get(IP_API + PORT + '/services/' + gender)
            .then(response => deferred.resolve(response.data.data))
            .catch(error => deferred.reject(error));
        return deferred.promise;
    }

    getService(id) {
        var deferred = this.$q.defer();
        this.$http.get(IP_API + PORT + '/service/' + id)
            .then(response => deferred.resolve(response.data.data))
            .catch(error => deferred.reject(error))
        return deferred.promise;
    }

    createService(service) {
        return this.$http.post(IP_API + PORT + '/service', service)
    }

    editService(service) {
        return this.$http.put(IP_API + PORT + '/service/' + service._id, service)
    }

    deleteService(service) {
        return this.$http.delete(IP_API + PORT + '/service/' + service._id)
    }

}
