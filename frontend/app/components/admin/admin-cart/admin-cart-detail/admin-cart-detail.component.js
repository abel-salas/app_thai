import controller from './admin-cart-detail.controller.js'

export const AdminCartDetailComponent = {
    bindings: {
        cart: '<'
    },
    controller,
    template: `
        <div class="card" ng-if="$ctrl.cart">
            <div class="card-content">
                {{$ctrl.cart}}
            </div>
        </div>
  `
}
