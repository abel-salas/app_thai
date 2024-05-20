import controller from './dashboard.controller.js'

export const DashboardPageComponent = {
    bindings: {
        data: '<'
    },
    controller,
    template: `
        <div class="container">
            <div class="row">

                <dashboard-user-card
                    data="$ctrl.data.users.totalUsers"
                    box-title="'Total clientes'">
                </dashboard-user-card>

                <dashboard-user-card
                    data="$ctrl.data.users.newUsersLastYear"
                    box-title="'Clientes nuevos ultimo año'">
                </dashboard-user-card>

                <dashboard-user-card
                    data="$ctrl.data.users.newUsersLastMonth"
                    box-title="'Clientes nuevos ultimo mes'">
                </dashboard-user-card>

                <div class="col s12 m6">
                    <dashboard-card
                        data="$ctrl.data.orders.services"
                        config="$ctrl.configServices"
                        box-title="'Resumen total de servicios realizados'">
                    </dashboard-card>
                </div>
                <div class="col s12 m6">
                    <dashboard-card
                        data="$ctrl.data.orders.products"
                        config="$ctrl.configServices"
                        box-title="'Resumen total de productos vendidos'">
                    </dashboard-card>
                </div>

                <statistics-last-year
                    data="$ctrl.data.ordersLastYear"
                    box-title="'Resumen anual de los servicios realizados.'"
                    type="'order'">
                </statistics-last-year>

                <statistics-last-year
                    data="$ctrl.data.cartsLastYear"
                    box-title="'Resumen anual de los recibos emitidos.'"
                    type="'cart'">
                </statistics-last-year>

            </div>
        </div>
    `
}
