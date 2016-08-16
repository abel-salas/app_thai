
class CartOrderComponent {
  constructor ($log,OrderService) {
      this.OrderService = OrderService;
      this.createCart = false;
      this.$log = $log;
  }

  removeServiceOrderline(value){
    this.OrderService.removeServiceOrderline(value);
  }

  removeProductOrderline(value){
    this.OrderService.removeProductOrderline(value);
  }

  confirmCart() {
    this.$log.debug('Confirm Cart ======> ', this.currency.total)

    this.onSayHello({
      $event: this.currency
    });
  }

  cancelOrder() {
    this.OrderService.OnInit();
  }
}

export default CartOrderComponent
