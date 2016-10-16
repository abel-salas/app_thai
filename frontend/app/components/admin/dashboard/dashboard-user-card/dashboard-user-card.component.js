import controller from './dashboard-user-card.controller.js'

export const DashboardUserCardComponent = {
    bindings: {
        data: '<',
        boxTitle: '<'
    },
    controller,
    template: `
    <div class="col s3">
        <div class="card card-panel cyan lighten-5">
                <hr>
                <h6 class="center">{{$ctrl.boxTitle}}</h6>
                <hr>
                <h3 class="center">{{$ctrl.data}}</h3>
        </div>
    </div>
    `
}
