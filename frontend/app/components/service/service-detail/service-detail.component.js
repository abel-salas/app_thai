
import controller from './service-detail.controller.js'

export const ServiceDetailComponent = {
  bindings: {
    service: '<'
  },
  controller,
  template: `
    <article class="card">
      <section class="card-content">
         <div class="row">
          <form class="col s12 mt-20" ng-submit="$ctrl.submitForm($ctrl.service)">
            <div class="row">
              <div class="input-field col s6">
                <i class="material-icons prefix">account_circle</i>
                <input id="name" type="text" class="validate" ng-model="$ctrl.service.name" required>
                <label for="name" ng-class="$ctrl.ifEmpty($ctrl.service.name)">Nombre</label>
              </div>
              <div class="input-field col s6">
                <i class="material-icons prefix">receipt</i>
                <input id="last_name" type="text" class="validate" ng-model="$ctrl.service.type" required>
                <label for="last_name" ng-class="$ctrl.ifEmpty($ctrl.service.type)">Tipo de servicio</label>
              </div>
            </div>

            <div class="row">
              <div class="input-field col s6">
                <i class="material-icons prefix">dialpad</i>
                <input id="price" type="number" class="validate" ng-model="$ctrl.service.price" required>
                <label for="price"
                       data-error="El formato introducido no es válido"
                       data-success="right"
                       ng-class="$ctrl.ifEmpty($ctrl.service.price)">Precio</label>
              </div>

              <div class="input-field col s6">
                <i class="material-icons prefix">class</i>
                <input id="brand" type="text" class="validate" ng-model="$ctrl.service.brand" required>
                <label for="brand" ng-class="$ctrl.ifEmpty($ctrl.service.brand)">Marca</label>
              </div>

            </div>

            <div class="row">
              <div class="input-field col s6">
                <i class="material-icons prefix">class</i>
                <input id="brand" type="text" class="validate" ng-model="$ctrl.service.img">
                <label for="brand" ng-class="$ctrl.ifEmpty($ctrl.service.brand)">Imagen</label>
              </div>
              <div class="col s6" ng-if="$ctrl.service.img">
                <img class="img_detail_product" src="img/service/{{$ctrl.service.img}}.jpg">
              </div>
            </div>

            <div class="row mb-60">
              <div class="input-field col s12">
                <i class="material-icons prefix">description</i>
                <input id="text" type="text" class="validate" ng-model="$ctrl.service.description" required>
                <label for="email" ng-class="$ctrl.ifEmpty($ctrl.service.description)">Descripción del servicio</label>
              </div>
            </div>

            <a class="btn-floating pink accent-2"
               type="reset"
               ng-click="$ctrl.deleteService($ctrl.service)"
               ng-if="!$ctrl.createService">

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