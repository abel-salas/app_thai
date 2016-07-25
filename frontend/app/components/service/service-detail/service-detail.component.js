
import controller from './service-detail.controller.js'

export const ServiceDetailComponent = {
  bindings: {
    user: '<'
  },
  controller,
  template: `
    <article class="card">
      <section class="card-content">
         <div class="row">
          <form class="col s12" ng-submit="$ctrl.submitForm($ctrl.service)">
            <div class="row">
              <div class="input-field col s6">
                <i class="material-icons prefix">account_circle</i>
                <input id="first_name" type="text" class="validate" ng-model="$ctrl.service.name">
                <label for="first_name" ng-class="$ctrl.ifEmpty($ctrl.service.name)">Nombre</label>
              </div>
              <div class="input-field col s6">
                <i class="material-icons prefix">assignment_ind</i>
                <input id="last_name" type="text" class="validate" ng-model="$ctrl.service.type">
                <label for="last_name" ng-class="$ctrl.ifEmpty($ctrl.service.type)">Tipo de servicio</label>
              </div>
            </div>

            <div class="row">
              <div class="input-field col s6">
                <i class="material-icons prefix">phone</i>
                <input id="phone" type="tel" class="validate" ng-model="$ctrl.service.price">
                <label for="phone" ng-class="$ctrl.ifEmpty($ctrl.service.price)">Precio</label>
              </div>

              <div class="input-field col s6">
                <i class="material-icons prefix">redeem</i>
                <input id="yearOfBirth" type="text" class="validate" ng-model="$ctrl.service.brand">
                <label for="yearOfBirth" ng-class="$ctrl.ifEmpty($ctrl.service.brand)">Marca</label>
              </div>

            </div>

            <div class="row">
              <div class="input-field col s12">
                <i class="material-icons prefix">email</i>
                <input id="email" type="email" class="validate" ng-model="$ctrl.service.description">
                <label for="email" ng-class="$ctrl.ifEmpty($ctrl.service.description)">Descripción del servicio</label>
              </div>
            </div>

            <button type="reset" class="btn waves-effect waves-light" ng-click="$ctrl.deleteService($ctrl.service)" style="background:#d81b60;">Eliminar
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