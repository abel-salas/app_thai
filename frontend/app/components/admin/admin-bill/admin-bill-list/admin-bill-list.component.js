import controller from './admin-bill-list.controller.js'

export const AdminBillListComponent = {
    controller,
    bindings: {
        bills: '<'
    },
    template: `
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
                          <th>Fecha de vencimiento</th>
                          <th>Proveedor</th>
                          <th>Tipo de pago</th>
                          <th>Total base</th>
                          <th>Total con iva</th>
                      </tr>
                    </thead>
                    <tbody>
                        <tr ng-repeat="bill in $ctrl.bills | filter:$ctrl.search" ng-click="$ctrl.viewBill(bill)">
                            <td><i class="material-icons ml-20 pink_color">description</i></td>
                            <td>{{bill.datePayment | date}}</td>
                            <td>{{bill.nameBusines}}</td>
                            <td>{{bill.methodPayment}}</td>
                            <td>{{bill.importBase}}€</td>
                            <td>{{bill.importTotal}}€</td>
                        </tr>
                    </tbody>
                </table>
            </div>
          </div>
      </div>
    `
}
