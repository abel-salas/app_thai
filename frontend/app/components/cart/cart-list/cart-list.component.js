import controller from './cart-list.controller.js'

export const CartListComponent = {
    controller,
    template: `
        <cart-open  action="$ctrl.callCartType"
                    is-close="!$ctrl.cartIsOpen"
                    return="$ctrl.closeCart($event);"
                    on-say-hello="$ctrl.sayHello($event);">
        </cart-open>

        <cart-order
                    cart="$ctrl.cart"
                    is-close="$ctrl.cartIsOpen">
        </cart-order>
    `
}
