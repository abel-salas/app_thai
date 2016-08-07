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

                     <ul class="right hide-on-med-and-down" ng-click="$ctrl.toggleCart()">
                          <li><a><i class="material-icons">vpn_key</i></a></li>
                     </ul>
                </div>
            </nav>

            <div ng-if="$ctrl.createCart">

                <cart-coins on-say-hello="$ctrl.sayHello($event);"></cart-coins>

                <div class="card-content">
                    <span class="card-title">
                      <ul class="collection with-header">
                        <li class="collection-item">
                        TOTAL
                            <span class="secondary-content">{{$ctrl.currency.total}}€</span>
                        </li>
                      </ul>
                    </span>
                </div>

                <div class="card-action">
                    <a href="#" type="reset" ng-click="$ctrl.cancelCart()">Cancelar</a>
                    <a href="#" ng-click="$ctrl.confirmCart()">Confirmar</a>
                </div>

            </div>

        </div>
    `
}

