
import controller from './user-detail.controller.js'

export const UserDetailComponent = {
  bindings: {
    user: '<'
  },
  controller,
  template: `
    <article class="card">
      <section class="card-content">
         <div class="row">
          <form class="col s12" ng-submit="$ctrl.submitForm($ctrl.user)">
            <div class="row">
              <div class="input-field col s6">
                <i class="material-icons prefix">account_circle</i>
                <input id="first_name" type="text" class="validate" ng-model="$ctrl.user.name">
                <label for="first_name" ng-class="$ctrl.ifEmpty($ctrl.user.name)">Nombre</label>
              </div>
              <div class="input-field col s6">
                <i class="material-icons prefix">assignment_ind</i>
                <input id="last_name" type="text" class="validate" ng-model="$ctrl.user.lastName">
                <label for="last_name" ng-class="$ctrl.ifEmpty($ctrl.user.lastName)">Apellidos</label>
              </div>
            </div>

            <div class="row">
              <div class="input-field col s6">
                <i class="material-icons prefix">phone</i>
                <input id="phone" type="tel" class="validate" ng-model="$ctrl.user.phone">
                <label for="phone" ng-class="$ctrl.ifEmpty($ctrl.user.phone)">Teléfono</label>
              </div>

              <div class="input-field col s6">
                <i class="material-icons prefix">redeem</i>
                <input id="yearOfBirth" type="text" class="validate" ng-model="$ctrl.user.yearOfBirth">
                <label for="yearOfBirth" ng-class="$ctrl.ifEmpty($ctrl.user.yearOfBirth)">Fecha de nacimiento</label>
              </div>

            </div>

            <div class="row">

                <div class="input-field col s6">
                  <input name="group1" type="radio" id="test1" ng-model="$ctrl.user.gender" value="female"/>
                  <label for="test1">Mujer</label>

                  <input name="group1" type="radio" id="test2" ng-model="$ctrl.user.gender" value="male"/>
                  <label for="test2">Hombre</label>
                </div>

                 <div class="input-field col s6">
                    <i class="material-icons prefix">location_on</i>
                    <input id="city" type="text" class="validate" ng-model="$ctrl.user.city">
                    <label for="city" ng-class="$ctrl.ifEmpty($ctrl.user.city)">Ciudad</label>
                 </div>

            </div>

            <div class="row">
              <div class="input-field col s6">
                <i class="material-icons prefix">email</i>
                <input id="email" type="email" class="validate" ng-model="$ctrl.user.email">
                <label for="email" ng-class="$ctrl.ifEmpty($ctrl.user.email)">Email</label>
              </div>
            </div>

            <button type="reset" class="btn waves-effect waves-light"
                    ng-click="$ctrl.deleteUser($ctrl.user)"
                    ng-if="!$ctrl.createService"
                    style="background:#d81b60;">Eliminar
                <i class="material-icons right">report_problem</i>
            </button>

            <button type="submit" class="waves-effect waves-light btn right">Enviar
                <i class="material-icons right">send</i>
            </button>
          
          </form>
        </div>
      </section>
    </article>
  `
}
