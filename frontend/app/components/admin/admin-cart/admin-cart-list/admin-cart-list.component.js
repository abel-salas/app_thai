import controller from './admin-cart-list.controller.js'

export const AdminCartListComponent = {
    controller,
    bindings: {
        carts: '<'
    },
    template: `
        <div class="container">
            <!--
            <admin-cart-detail cart="$ctrl.selectedCart"></admin-cart-detail>
            -->
            <div class="card">
              <div class="card-content">
                <div class="row">
                    <div class="input-field col s6">
                      <i class="material-icons prefix">search</i>
                      <input ng-model="$ctrl.search" id="icon_prefix" type="text" class="validate">
                      <label for="icon_prefix">Buscar</label>
                    </div>
                </div>
                <hr>
                <table class="striped">
                    <thead>
                      <tr>
                          <th></th>
                          <th>Fecha</th>
                          <th>Apertura caja</th>
                          <th>Cierre caja</th>
                          <th>Dinero caja</th>
                          <th>Resultado</th>
                          <th>Pago Efectivo</th>
                          <th>Pago Mixto</th>
                          <th>Pago Tarjeta</th>
                          <th>Total caja</th>
                      </tr>
                    </thead>
                    <tbody>
                        <tr ng-repeat="cart in $ctrl.carts | filter:$ctrl.search" ng-click="$ctrl.viewCart(cart)">
                            <td><i class="material-icons ml-20 pink_color">description</i></td>
                            <td>{{cart.created}}€</td>
                            <td>{{cart.openCurrency}}€</td>
                            <td>{{cart.closeCurrency}}€</td>
                            <td>{{cart.openCurrency + cart.totalPayments.totalEfectivo + cart.totalPayments.totalMixto}}€</td>
                            <td ng-class="{'zero' : cart.diferenceCart == 0,
                                           'negative' : cart.diferenceCart < 0,
                                           'positive' : cart.diferenceCart > 0}">
                                {{cart.diferenceCart}}
                            </td>
                            <td>{{cart.totalPayments.totalEfectivo}}€</td>
                            <td>{{cart.totalPayments.totalMixto}}€</td>
                            <td>{{cart.totalPayments.totalTarjeta}}€</td>
                            <td>{{cart.resultCurrency | number:2}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
          </div>
      </div>
    `
}
