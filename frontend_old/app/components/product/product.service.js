/**
 * components/speaker/speaker.service.js
 *
 * Service to fetch data from Speakers API
 */
const IP_API = 'http://127.0.0.1';
const PORT   = ':8082';

export default class ProductService {
  constructor ($http,$log,$q) {
    this.$http = $http
    this.$log = $log
    this.$q = $q
  }

  getProducts () {
    var deferred = this.$q.defer();
      this.$http.get(IP_API + PORT + '/products/')
        .then(response => {
          this.$log.debug('Products ', response.data.content.data)
          deferred.resolve(response.data.content.data)
        } )
        .catch(error => deferred.reject(error) );
    return deferred.promise;
  }

  getProduct (id) {
    var deferred = this.$q.defer();
      this.$http.get(IP_API + PORT + '/Product/' + id)
        .then(response => deferred.resolve(response.data.content.data) )
        .catch(error => deferred.reject(error) )
    return deferred.promise;
  }

}
