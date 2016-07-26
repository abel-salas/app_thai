/**
 * components/speaker/spekaer-list/speaker-list.controller.js
 *
 * Controller for <product-list> component
 */

class ProductListController {
  constructor ($state) {
    this.$state = $state
    this.message = 'Hi ngErs!'
  }

  sayHello ({ userName }) {
    window.alert(`Hello ${userName}!`)
  }

  createProduct() {
    this.$state.go('index.createProduct')
  }

}

export default ProductListController
