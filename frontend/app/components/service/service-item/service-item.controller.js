/**
 * components/speaker/speaker-item/speaker-item.controller.js
 *
 * Controller for <service-item> component
 */

class ServiceItemController {
  constructor () {}

  onClick () {
    this.onSayHello({
      $event: {
        userName: this.data.name
      }
    })
  }
}

export default ServiceItemController
