/**
 * components/speaker/spekaer-list/speaker-list.controller.js
 *
 * Controller for <user-list> component
 */

class CartListController {
    constructor() {
        this.message = 'Hi ngErs!';

        this.cartIsOpen = true;

        this.user = {};
        this.user.name = "Abel Salas";
        this.user.orderId = "34582313";

        this.cart = "10/06/2016";
    }

    sayHello(user) {
        console.log('Output User', user)
    }

}

export default CartListController
