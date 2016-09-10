
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

                <label for="gender" ng-class="$ctrl.ifEmpty($ctrl.service.gender)">Categoria del servicio</label>

                <input name="men" type="radio" id="test1" ng-model="$ctrl.service.gender" value="men"/>
                <label for="test1">Men</label>

                <input name="woman" type="radio" id="test2" ng-model="$ctrl.service.gender" value="woman"/>
                <label for="test2">Woman</label>

                <input name="laser" type="radio" id="test3" ng-model="$ctrl.service.gender" value="laser"/>
                <label for="test3">Laser</label>
              </div>

            </div>

            <div class="row">
              <div class="input-field col s6">
                <i class="material-icons prefix">class</i>
                <input id="brand" type="text" class="validate" ng-model="$ctrl.service.img.name">
                <label for="brand" ng-class="$ctrl.ifEmpty($ctrl.service.img.name)">Imagen</label>
              </div>
              <div class="col s6" ng-if="$ctrl.service.img.name">
                <div class="row">
                  <div class="col s6 flow-hidden" >
                    <div class="card-image">
                        <img src="img/service/{{$ctrl.service.img.name}}.jpg" ng-style="$ctrl.styleInline">
                    </div>
                  </div>
                  <div class="col s6">
                    <p>Ancho de la imagen:</p>
                    <p class="range-field">
                      <input type="range" id="test5" min="-100" max="150" ng-model="$ctrl.input.top" ng-change="$ctrl.insertPx('top')"/>
                    </p>
                    <p>Posicion vertical de la imagen:</p>
                    <p class="range-field">
                      <input type="range" id="test6" min="50" max="150" ng-model="$ctrl.input.width" ng-change="$ctrl.insertPx('width')"/>
                    </p>
                    <p>Posicion lateral de la imagen:</p>
                    <p class="range-field">
                      <input type="range" id="test7" min="-100" max="150" ng-model="$ctrl.input.left" ng-change="$ctrl.insertPx('left')"/>
                    </p>
                  </div>
                </div>
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