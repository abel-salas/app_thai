import controller from './cart-list.controller.js'

export const OrderListComponent = {
    bindings: {
        array: '<'
    },
    controller,
    template: `
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
                  <th data-field="totalOrder">Valor</th>
                  <th data-field="created">Fecha</th>
                  <th data-field="services">Servicios
                    <ul>
                        <li>
                            <span class="grey-text">Nombre - </span>
                            <span class="grey-text">Tipo - </span>
                            <span class="grey-text">Marca - </span>
                            <span class="grey-text">Precio - </span>
                            <span class="grey-text">Descripción</span>
                        </li>
                    </ul>
                  </th>
                  <th data-field="products">Productos
                    <ul>
                        <li>
                            <span class="grey-text">Nombre - </span>
                            <span class="grey-text">Tipo - </span>
                            <span class="grey-text">Marca - </span>
                            <span class="grey-text">Precio - </span>
                            <span class="grey-text">Descripción</span>
                        </li>
                    </ul>
                  </th>
              </tr>
            </thead>

            <tbody>
                <tr ng-repeat="order in $ctrl.array | filter:$ctrl.search">
                    <td><i class="material-icons ml-20 pink_color">loyalty</i></td>
                    <td>{{order.totalOrder}}</td>
                    <td>{{order.created}}</td>
                    <td>
                        <ul>
                            <li ng-repeat="item in order.orderlines[0].services">
                                <span><i class="material-icons tiny indigo_color" style="margin-top:5px;">label</i></span>
                                <span>{{item.name}}</span>,
                                <span>{{item.type}}</span>,
                                <span>{{item.brand}}</span>,
                                <span>{{item.price}}</span>,
                                <span>{{item.description}}</span>
                            </li>
                        </ul>
                    </td>
                    <td>
                        <ul>
                            <li ng-repeat="item in order.orderlines[0].products">
                                <span><i class="material-icons tiny indigo_color" style="margin-top:5px;">label</i></span>
                                <span>{{item.name}}</span>,
                                <span>{{item.type}}</span>,
                                <span>{{item.brand}}</span>,
                                <span>{{item.price}}</span>,
                                <span>{{item.description}}</span>
                            </li>
                        </ul>
                    </td>
                </tr>
            </tbody>

        </table>
    </div>
  `
}
