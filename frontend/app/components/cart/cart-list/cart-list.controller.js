/**
 * components/speaker/spekaer-list/speaker-list.controller.js
 *
 * Controller for <user-list> component
 */

class CartListController {
    constructor(CartService, $log) {
        this.CartService = CartService;
        this.$log = $log;


        this.user = {};
        this.user.name = "Abel Salas";
        this.user.orderId = "34582313";

        this.getCart();
    }

    getCart(){
        this.CartService.getCart()
            .then(res => {
                this.cartIsOpen = false;
                this.cart = res.created;
            })
            .catch(err => {
                this.cartIsOpen = true;
            })
    }

    sayHello(currency) {
        var openCurrency = {
            coins: currency.coins,
            dollars: currency.dollars,
            total: currency.total
        }
        this.CartService.createCart(currency)
            .then(res => {
                this.$log.debug('Carrito creado correctamente',res);
                this.cart = res.created;
                Materialize.toast( 'El carrito se ha creado correctamente! caja : ' + res.openCurrency + '€', 3000)
                this.toggleStateCart();
            })
            .catch(err => {
                this.$log.debug('Error al crear el carrito',err)
            })
    }

    toggleStateCart(){
        this.$log.debug('toggleStateCart')
        this.cartIsOpen = !this.cartIsOpen;
    }

}

export default CartListController
