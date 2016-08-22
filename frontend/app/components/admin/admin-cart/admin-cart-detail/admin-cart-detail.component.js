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
                <div class="row">
                    <div class="col s2">
                        <canvas id="doughnut" class="chart chart-doughnut"
                          chart-data="$ctrl.data" chart-labels="$ctrl.labels">
                        </canvas>
                    </div>
                </div>
            </div>
        </div>
  `
}
