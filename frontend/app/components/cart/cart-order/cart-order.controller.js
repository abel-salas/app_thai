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

    onCkickPayment(){
        this.OrderService.sendPayment(this.payment);
    }

    confirmOrder() {
        if(this.payment){
            this.OrderService.createOrder();
            this.payment = undefined;
        } else {
            Materialize.toast( 'Tienes que elegir un metodo de pago!', 3000);
        }
    }

    cancelOrder() {
        this.OrderService.OnInit();
    }
}

export default CartOrderComponent
