/**
 * components/speaker/speaker-item/speaker-item.component.js
 *
 * Stateful Component that defines a item in a speakers list.
 * Stateful: - Fetches state, essentially communicating to a backend API through a service
 *           - In this example, the data is fetched in resolve routes and injected in 'data' property binding.
 */

import controller from './cart-close.controller.js'

export const CartCloseComponent = {
    bindings: {
        isClose: '<',
        onSayHello: '&'
    },
    controller,
    template: `
        <div class="card indigo" ng-if="$ctrl.isClose">

            <nav class="indigo lighten-1">
                <div class="nav-wrapper">

                     <i class="material-icons left ml-20">lock</i>
                     <span>La caja esta cerrada.</span>

                     <ul class="right hide-on-med-and-down" ng-click="$ctrl.openCreateCart()">
                          <li><a><i class="material-icons">vpn_key</i></a></li>
                     </ul>
                </div>
            </nav>

            <cart-coins create-cart="$ctrl.createCart"></cart-coins>


        </div>
    `
}

