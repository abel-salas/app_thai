import controller from './dashboard-card.controller.js'

export const DashboardCardComponent = {
    bindings: {
        data: '<',
        config: '<',
        boxTitle: '<'
    },
    controller,
    template: `
        <div class="card">
            <div class="card-content">
                <hr>
                  <h5>{{$ctrl.boxTitle}}</h5>
                <hr>
                <table class="striped">
                    <thead>
                      <tr>
                          <th></th>
                          <th>Cantidad</th>
                          <th>Tipo</th>
                          <th>Nombre</th>
                      </tr>
                    </thead>
                    <tbody>
                        <tr ng-repeat="item in $ctrl.dataFiltered | limitTo:'10'">
                            <td class="center cyan lighten-3">{{$index + 1}}</td>
                            <td class="center"><b>{{item[$ctrl.config.quantity]}}</b></td>
                            <td>{{item[$ctrl.config.type]}}</td>
                            <td><b>{{item[$ctrl.config.name]}}</b></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `
}
