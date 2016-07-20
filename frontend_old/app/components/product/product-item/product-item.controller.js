/**
 * components/speaker/speaker-item/speaker-item.controller.js
 *
 * Controller for <product-item> component
 */

class ProductItemController {
  constructor () {}

  onClick () {
    this.onSayHello({
      $event: {
        userName: this.data.name
      }
    })
  }
}

export default ProductItemController
