import controller from './cart-list.controller.js'

export const CartListComponent = {
    controller,
    template: `
        <cart-close is-close="$ctrl.cartIsOpen" on-say-hello="$ctrl.sayHello($event);"></cart-close>

        <div class="card indigo" ng-if="!$ctrl.cartIsOpen">

             <nav class="indigo lighten-1">
                <div class="nav-wrapper">

                     <i class="material-icons left ml-20">shopping_basket</i>
                     <span>{{$ctrl.cart}}</span>

                     <ul class="right hide-on-med-and-down">
                          <li><a href="mobile.html"><i class="material-icons">more_vert</i></a></li>
                     </ul>
                </div>
             </nav>

            <div class="card-content">
                <span class="card-title">
                  <ul class="collection with-header">
                    <li class="collection-item">
                        {{$ctrl.user.name}}
                        <a href="#!" class="secondary-content">
                        <i class="material-icons indigoL1_color">assignment_ind</i></a>
                    </li>
                    <li class="collection-item">
                        {{$ctrl.user.orderId}}
                        <a href="#!" class="secondary-content">
                        <i class="material-icons indigoL1_color">assignment</i></a>
                    </li>
                  </ul>
                </span>
            </div>

            <div class="card-content">
                <ul class="collection with-header">
                    <li class="collection-item">
                        <div>
                            <span>25€ </span>
                            Tratamiento corporal
                            <a href="#!" class="secondary-content"><i class="material-icons pink_color">delete</i></a>
                        </div>
                    </li>
                    <li class="collection-item">
                        <div>
                            <span>25€ </span>
                            Manos
                            <a href="#!" class="secondary-content"><i class="material-icons pink_color">delete</i></a>
                        </div>
                    </li>
                    <li class="collection-item">
                        <div>
                            <span>25€ </span>
                            Pies
                            <a href="#!" class="secondary-content"><i class="material-icons pink_color">delete</i></a>
                        </div>
                    </li>
                    <li class="collection-item">

                        <div>
                            <span>55€ </span>Crema solar
                            <a href="#!" class="secondary-content"><i class="material-icons pink_color">delete</i></a>
                        </div>
                    </li>
                </ul>
            </div>


            <div class="card-content">
                <span class="card-title">
                  <ul class="collection with-header">
                    <li class="collection-item">
                        TOTAL
                        <span class="secondary-content">235€</span>
                    </li>
                  </ul>
                </span>
            </div>

            <div class="card-action">
                <a href="#">Cancelar recibo</a>
                <a href="#">Confirmar recibo</a>
            </div>

        </div>
    `
}
