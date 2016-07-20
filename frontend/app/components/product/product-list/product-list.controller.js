/**
 * components/speaker/spekaer-list/speaker-list.controller.js
 *
 * Controller for <product-list> component
 */

class ProductListController {
  constructor () {
    this.message = 'Hi ngErs!'
  }

  sayHello ({ userName }) {
    window.alert(`Hello ${userName}!`)
  }
}

export default ProductListController
