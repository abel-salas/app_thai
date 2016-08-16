
import controller from './cart-open.controller.js'

export const CartOpenComponent = {
    bindings: {
        action: '<',
        isClose: '<',
        onSayHello: '&',
        return: '&'
    },
    controller,
    template: `
        <div class="card indigo" ng-if="$ctrl.isClose">

            <nav class="indigo lighten-1">
                <div class="nav-wrapper">

                     <ul class="left hide-on-med-and-down" ng-click="$ctrl.return($event);" ng-if="($ctrl.action == 'created')">
                          <li><a><i class="material-icons">skip_previous</i></a></li>
                     </ul>
                     <span ng-if="($ctrl.action == 'created')">Vamos a cerrar la caja!</span>

                     <i class="material-icons left ml-20" ng-if="($ctrl.action == 'closed')">lock</i>
                     <span ng-if="($ctrl.action == 'closed')">Vamos a abrir la caja!</span>

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

