class CartOrderComponent {
    constructor($log, OrderService) {
        this.OrderService = OrderService;
        this.createCart = false;
        this.$log = $log;
    }

    removeServiceOrderline(value) {
        this.OrderService.removeServiceOrderline(value);
    }

    removeProductOrderline(value) {
        this.OrderService.removeProductOrderline(value);
    }

    confirmOrder() {
        this.$log.log('Confirm Order ===> ', this.payment);
        this.OrderService.createOrder(this.payment);
    }

    cancelOrder() {
        this.OrderService.OnInit();
    }
}

export default CartOrderComponent
