import controller from './user-history.controller.js'

export const UserHistoryComponent = {
    bindings: {
        user: '<'
    },
    controller,
    template: `
      <ac-header></ac-header>
      <div class="container">
          <div class="card">
              <div class="card-content">
                  <div class="row">
                      <div class="col s1">
                        <i class="material-icons large indigoL1_color" style="margin-top:16px;">assignment_ind</i>
                      </div>
                      <div class="col s2">
                          <h4 class="card-title">{{$ctrl.user.name}} {{$ctrl.user.lastName}}</h4>
                          <p class="medium-small grey-text">Nombre</p>
                      </div>
                      <div class="col s2 center-align">
                          <h4 class="card-title">{{$ctrl.user.phone}}</h4>
                          <p class="medium-small grey-text">Teléfono</p>
                      </div>
                      <div class="col s2 center-align">
                          <h4 class="card-title">{{$ctrl.user.city}}</h4>
                          <p class="medium-small grey-text">Población</p>
                      </div>
                      <div class="col s2 center-align">
                          <h4 class="card-title">{{$ctrl.user.yearOfBirth | date}}</h4>
                          <p class="medium-small grey-text">Año de nacimiento</p>
                      </div>
                      <div class="col s2 center-align">
                          <h4 class="card-title">{{$ctrl.user.email}}</h4>
                          <p class="medium-small grey-text">Email</p>
                      </div>
                  </div>
              </div>
          </div>
          <div class="card">
              <order-list array="$ctrl.ordersUser"></order-list>
          </div>
      </div>

  `
}
