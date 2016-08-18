class CartOpenController {
    constructor($log) {
        this.createCart = false;
        this.$log = $log;
    }

    toggleCart() {
        this.createCart = !this.createCart
    }

    sayHello(totalCurrency) {
        this.totalCurrency = totalCurrency
    }

    confirmCart() {
        this.$log.debug('Confirm Cart ======> ', this.totalCurrency)

        if(this.totalCurrency > 50){
            this.toggleCart();
            this.onSayHello({
                $event: this.totalCurrency
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
