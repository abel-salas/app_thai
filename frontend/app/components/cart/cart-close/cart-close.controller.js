
class CartCloseController {
  constructor () {
      this.createCart = false;
  }

  onClick () {
    this.onSayHello({
      $event: {
        userName: this.data.name
      }
    })
  }

  openCreateCart() {
    this.createCart = !this.createCart
  }

}

export default CartCloseController
