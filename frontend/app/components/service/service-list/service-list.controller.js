/**
 * components/speaker/spekaer-list/speaker-list.controller.js
 *
 * Controller for <service-list> component
 */

class ServiceListController {

  constructor ($state) {
    this.$state = $state
  }

  sayHello ({ userName }) {
    window.alert(`Hello ${userName}!`)
  }

  createService() {
    this.$state.go('index.createService')
  }

}

export default ServiceListController
