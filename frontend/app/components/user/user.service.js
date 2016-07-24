/**
 * components/speaker/speaker.service.js
 *
 * Service to fetch data from Speakers API
 */
const IP_API = 'http://127.0.0.1';
const PORT   = ':8082';

export default class UserService {
  constructor ($http,$log,$q) {
    this.$http = $http
    this.$log = $log
    this.$q = $q
  }

  getUsers () {
    var deferred = this.$q.defer();
      this.$http.get(IP_API + PORT + '/users/')
        .then(response => deferred.resolve(response.data.content.data) )
        .catch(error => deferred.reject(error) );
    return deferred.promise;
  }

  getUser (id) {
    var deferred = this.$q.defer();
      this.$http.get(IP_API + PORT + '/user/' + id)
        .then(response => deferred.resolve(response.data.content.data) )
        .catch(error => deferred.reject(error) )
    return deferred.promise;
  }

  createUser (user) {
    var deferred = this.$q.defer();
    this.$http.post(IP_API + PORT + '/user/create')
        .then(response => deferred.resolve(response.data.content.data) )
        .catch(error => deferred.reject(error) )
    return deferred.promise;
  }

}
