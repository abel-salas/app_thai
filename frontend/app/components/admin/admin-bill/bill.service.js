const IP_API = 'http://127.0.0.1';
const PORT = ':8082';

export default class BillService {
    constructor($http, $log, $q) {
        this.$http = $http;
        this.$log = $log;
        this.$q = $q;
    }

    createBill(bill) {
        var deferred = this.$q.defer();
        this.$http.post(IP_API + PORT + '/bill/create/', bill)
            .then(res => {
                this.$log.log('post create bill',res);
                deferred.resolve(res.data.data)
            })
            .catch(error => deferred.reject(error));
        return deferred.promise;
    };

    getBill(id) {
        var deferred = this.$q.defer();
        this.$http.get(IP_API + PORT + '/bill/' + id)
            .then(res => {
                if(res.data.data[0]){
                    this.$log.log('post create bill',res.data.data[0]);
                    deferred.resolve(res.data.data[0]);
                } else {
                    deferred.reject()
                }
            })
            .catch(error => deferred.reject(error));
        return deferred.promise;
    };

    getAllBills() {
        var deferred = this.$q.defer();
        this.$http.get(IP_API + PORT + '/bill/all/')
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

}
