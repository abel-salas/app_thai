class CartOpenController {
    constructor($log) {
        this.createCart = false;
        this.$log = $log;
    }

    toggleCart() {
        this.createCart = !this.createCart
    }

    sayHello(currency) {
        this.currency = currency
    }

    confirmCart() {
        this.$log.debug('Confirm Cart ======> ', this.currency.total)

        if(this.currency.total > 50){
            this.toggleCart();
            this.onSayHello({
                $event: this.currency
            });
        } else {
            Materialize.toast( 'Debes rellenar todos los campos!', 3000);
        }

    }

    cancelCart() {
        this.toggleCart();
    }
}

export default CartOpenController
