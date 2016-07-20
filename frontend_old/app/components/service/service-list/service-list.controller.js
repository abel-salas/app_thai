/**
 * components/speaker/spekaer-list/speaker-list.controller.js
 *
 * Controller for <service-list> component
 */

class ServiceListController {
  constructor () {
    this.message = 'Hi ngErs!'
  }

  sayHello ({ userName }) {
    window.alert(`Hello ${userName}!`)
  }
}

export default ServiceListController
