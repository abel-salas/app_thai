
class CartListController {
    constructor(CartService, $log, OrderService) {
        this.CartService = CartService;
        this.OrderService = OrderService;
        this.$log = $log;

        this.getCart();
        this.cart = Object;
        this.callCartType = String;
    }

    getCart(){
        this.CartService.getCart()
            .then(res => {
                this.cartIsOpen = true;
                this.callCartType = 'created';
                this.cart = res;
                this.OrderService.sendIdCart(this.cart._id);
            })
            .catch(err => {
                this.callCartType = 'closed';
                this.cartIsOpen = false;
            })
    }

    sayHello(currency) {
        var openCurrency = {
            coins: currency.coins,
            dollars: currency.dollars,
            total: currency.total
        }

        switch(this.callCartType){

            case 'created':
                this.CartService.closeCart(this.cart._id, currency)
                    .then(res => {
                        this.cart = undefined;
                        this.cartIsOpen = false;
                        this.callCartType = 'closed';
                        Materialize.toast( 'El carrito se ha cerrado correctamente! </br> La caja tiene: ' + res.closeCurrency.total + '€', 5000);
                    })
                    .catch(err => {
                        this.$log.debug('Error al cerrar el carrito',err)
                    })
                break;

            case 'closed':
                this.CartService.createCart(currency)
                    .then(res => {
                        this.cart = res;
                        this.cartIsOpen = true;
                        this.callCartType = 'created';
                        Materialize.toast( 'El carrito se ha creado correctamente! </br> La caja tiene:' + res.currency.total + '€', 5000);
                    })
                    .catch(err => {
                        this.$log.debug('Error al crear el carrito',err)
                    })
                break;
        }

    }

    toggleStateCart(){
        this.cartIsOpen = !this.cartIsOpen;
    }

    closeCart(){
        this.cartIsOpen = !this.cartIsOpen;
    }

}

export default CartListController
