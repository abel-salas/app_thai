import controller from './statistics-last-year.controller.js'

export const StatisticsLastYear = {
    bindings: {
          data: '<',
          boxTitle: '<',
          type: '<'
        },
        controller,
        template: `
          <div class="col s12">
              <div class="card">
                  <div class="card-content" style="overflow:hidden;">
                      <hr>
                      <h6 class="center">{{$ctrl.boxTitle}}</h6>

                      <div ng-if="$ctrl.type == 'order'">
                        <div class="col s1">
                            <p>Fecha</p>
                            <p>-</p>
                            <p>Ingresos</p>
                            <p>Servicios</p>
                        </div>
                        <div class="col s1" ng-repeat="item in $ctrl.data | limitTo:11">
                            <label>{{item.date.start | date:"d/M/yy"}} / {{item.date.end | date:"d/M/yy"}}</label>
                            <a class="center tooltipped"
                                data-position="bottom"
                                data-tooltip="Cantidad total de ingresos.">{{item.totalMoney | currency:"€"}}</a>
                            <a class="center tooltipped"
                                data-position="bottom"
                                data-tooltip="Numero total de servicios realizados.">{{item.totalOrders}}</a>
                        </div>
                      </div>

                      <div ng-if="$ctrl.type == 'cart'">
                        <div class="col s1">
                            <p>Fecha</p>
                            <p>-</p>
                            <p>Declarado</p>
                            <p>Tarjeta</p>
                            <p>Efectivo</p>
                            <p>Mixto</p>
                        </div>
                        <div class="col s1" ng-repeat="item in $ctrl.data | limitTo:11">
                          <label>{{item.date.start | date:"d/M/yy"}} / {{item.date.end | date:"d/M/yy"}}</label>
                          <h6 class="center cyan lighten-5">{{item.totalPayments.totalTarjeta + item.totalPayments.totalEfectivo | currency:"€"}}</h6>
                          <a class="center tooltipped"
                              data-position="bottom"
                              data-tooltip="Pagos realizados con tarjeta.">{{item.totalPayments.totalTarjeta | currency:"€"}}</a>
                          <a class="center tooltipped"
                              data-position="bottom"
                              data-tooltip="Pagos realizados en efectivo.">{{item.totalPayments.totalEfectivo | currency:"€"}}</a>
                          <a class="center tooltipped"
                              data-position="bottom"
                              data-tooltip="Pagos realizados en mixto.">{{item.totalPayments.totalMixto | currency:"€"}}</a>
                        </div>
                      </div>

                  </div>
              </div>
          </div>
    `
}
