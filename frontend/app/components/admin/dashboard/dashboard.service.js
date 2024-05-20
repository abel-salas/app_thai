const IP_API = 'http://127.0.0.1';
const PORT = ':8082';

export default class DashboardService {
    constructor($http, $log, $q) {
        this.$http = $http
        this.$log = $log
        this.$q = $q
    }

    getStatistics() {
        var deferred = this.$q.defer();
        this.$http.get(IP_API + PORT + '/admin/dashboard/')
            .then(response => {
                console.log('response ',response);
                deferred.resolve(response.data.data);
            })
            .catch(error => deferred.reject(error))
        return deferred.promise;
    }

}
