
class CartCloseController {
  constructor ($log) {
      this.createCart = false;
      this.$log = $log
  }

  toggleCart (currency) {
    this.$log.log('Cancel output');
    this.createCart = !this.createCart
  }

  sayHello ( currency ) {
    this.currency = currency
  }

  openCreateCart() {
    this.$log.debug('openCreateCart ======> ')
  }

  confirmCart() {
    this.$log.debug('Confirm Cart ======> ', this.currency.total)

    this.onSayHello({
      $event: this.currency
    });
  }

  cancelCart() {
    this.toggleCart();
  }
}

export default CartCloseController
