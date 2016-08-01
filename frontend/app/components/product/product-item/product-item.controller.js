
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
