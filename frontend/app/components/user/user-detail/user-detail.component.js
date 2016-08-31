
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
          <form class="col s12 mt-20" ng-submit="$ctrl.submitForm($ctrl.user)" name"myForm">
            <div class="row">
              <div class="input-field col s6">
                <i class="material-icons prefix">account_circle</i>
                <input id="first_name" type="text" class="validate" ng-model="$ctrl.user.name" required>
                <label for="first_name" ng-class="$ctrl.ifEmpty($ctrl.user.name)">Nombre</label>
              </div>
              <div class="input-field col s6">
                <i class="material-icons prefix">assignment_ind</i>
                <input id="last_name" type="text" class="validate" ng-model="$ctrl.user.lastName" required>
                <label for="last_name" ng-class="$ctrl.ifEmpty($ctrl.user.lastName)">Apellidos</label>
              </div>
            </div>

            <div class="row">
              <div class="input-field col s6">
                <i class="material-icons prefix">phone</i>
                <input id="phone" type="tel" class="validate" ng-model="$ctrl.user.phone" required>
                <label for="phone" ng-class="$ctrl.ifEmpty($ctrl.user.phone)">Teléfono</label>
              </div>

              <div class="input-field col s6">
                <i class="material-icons prefix">redeem</i>
                <input id="yearOfBirth"
                        type="date"
                        class="validate"
                        ng-model="$ctrl.user.yearOfBirth">
                <label for="yearOfBirth" class="active">Fecha de nacimiento</label>
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
                    <input id="city" type="text" class="validate" ng-model="$ctrl.user.city" required>
                    <label for="city" ng-class="$ctrl.ifEmpty($ctrl.user.city)">Población</label>
                 </div>

            </div>

            <div class="row mb-60">
              <div class="input-field col s6">
                <i class="material-icons prefix">email</i>
                <input id="email" type="email" class="validate" ng-model="$ctrl.user.email">
                <label for="email"
                       ng-class="$ctrl.ifEmpty($ctrl.user.email)"
                       data-error="El formato introducido no es válido"
                       data-success="right">Email</label>
              </div>
            </div>

            <a class="btn-floating pink accent-2"
               type="reset"
               ng-click="$ctrl.deleteUser($ctrl.user)"
               ng-if="!$ctrl.createUser">

                <i class="material-icons">delete</i>
            </a>

            <button type="submit"
                    ng-disabled="myForm.$invalid"
                    class="waves-effect waves-light btn right indigo">Guardar

                <i class="material-icons right">send</i>

            </button>

          </form>
        </div>
      </section>
    </article>
  `
}
