import controller from './cart-order.controller.js'

export const CartOrderComponent = {
    bindings: {
        cart: '<',
        isClose: '<',
        onSayHello: '&'
    },
    controller,
    template: `
        <div class="card indigo pd-10" ng-if="$ctrl.isClose">

            <nav class="indigo lighten-1">
                <div class="nav-wrapper">

                    <i class="material-icons left ml-20">shopping_basket</i>
                    <span>{{$ctrl.cart.created}}</span>

                    <ul class="right hide-on-med-and-down">
                        <li>
                            <a href="#!" ng-click="$ctrl.onSayHello($event);">
                                <i class="material-icons">more_vert</i>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div ng-if="!$ctrl.OrderService.user">
                <div class="card ml-20 mr-20 mt-20">
                    <div class="card-image">
                        <img src="img/logoThai.jpg">
                    </div>
                </div>
            </div>

            <div ng-if="$ctrl.OrderService.user">
                <div class="card-content">
                    <span class="card-title">
                        <ul class="collection with-header">
                            <li class="collection-item">
                                {{$ctrl.OrderService.user.name}}
                                {{$ctrl.OrderService.user.lastName}}
                                <a href="#!" class="secondary-content">
                                <i class="material-icons indigoL1_color">assignment_ind</i></a>
                            </li>
                        </ul>
                    </span>
                </div>

                <div class="card-content" ng-if="($ctrl.OrderService.orderlines.services.length > 0)">
                    Servicios:
                    <ul class="collection with-header">
                        <li class="collection-item" ng-repeat="orderline in $ctrl.OrderService.orderlines.services track by $index">
                            <div>
                                <span>{{orderline.price}}€ </span>
                                {{orderline.name}}
                                <a ng-click="$ctrl.removeServiceOrderline($index)" href="#!" class="secondary-content"><i class="material-icons pink_color">delete</i></a>
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="card-content" ng-if="($ctrl.OrderService.orderlines.products.length > 0)">
                    Productos:
                    <ul class="collection with-header">
                        <li class="collection-item" ng-repeat="orderline in $ctrl.OrderService.orderlines.products track by $index">
                            <div>
                                <span>{{orderline.price}}€ </span>
                                {{orderline.name}}
                                <a ng-click="$ctrl.removeProductOrderline($index)" href="#!" class="secondary-content"><i class="material-icons pink_color">delete</i></a>
                            </div>
                        </li>
                    </ul>
                </div>


                <div class="card-content">
                    <span class="card-title">
                        <ul class="collection with-header">
                            <li class="collection-item">
                                TOTAL
                                <span class="secondary-content">{{}}€</span>
                            </li>
                        </ul>
                    </span>
                </div>

                <div class="card-action">
                    <a ng-href="#" ng-click="$ctrl.cancelOrder()">Cancelar recibo</a>
                    <a href="#">Confirmar recibo</a>
                </div>
            </div>
        </div>

    `
}

