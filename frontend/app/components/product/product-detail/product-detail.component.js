
import controller from './product-detail.controller.js'

export const ProductDetailComponent = {
  bindings: {
    product: '<'
  },
  controller,
  template: `
    <article class="card">
      <section class="card-content">
         <div class="row">
          <form class="col s12 mt-20" ng-submit="$ctrl.submitForm($ctrl.product)">
            <div class="row">
              <div class="input-field col s6">
                <i class="material-icons prefix">account_circle</i>
                <input id="name" type="text" class="validate" ng-model="$ctrl.product.name">
                <label for="name" ng-class="$ctrl.ifEmpty($ctrl.product.name)">Nombre</label>
              </div>
              <div class="input-field col s6">
                <i class="material-icons prefix">receipt</i>
                <input id="last_name" type="text" class="validate" ng-model="$ctrl.product.type">
                <label for="last_name" ng-class="$ctrl.ifEmpty($ctrl.product.type)">Tipo de producto</label>
              </div>
            </div>

            <div class="row">
              <div class="input-field col s6">
                <i class="material-icons prefix">dialpad</i>
                <input id="price" type="tel" class="validate" ng-model="$ctrl.product.price">
                <label for="price" ng-class="$ctrl.ifEmpty($ctrl.product.price)">Precio</label>
              </div>

              <div class="input-field col s6">
                <i class="material-icons prefix">class</i>
                <input id="brand" type="text" class="validate" ng-model="$ctrl.product.brand">
                <label for="brand" ng-class="$ctrl.ifEmpty($ctrl.product.brand)">Marca</label>
              </div>

            </div>

            <div class="row">
              <div class="input-field col s6">
                <i class="material-icons prefix">class</i>
                <input id="brand" type="text" class="validate" ng-model="$ctrl.product.img">
                <label for="brand" ng-class="$ctrl.ifEmpty($ctrl.product.brand)">Imagen</label>
              </div>
              <div class="col s6" ng-if="$ctrl.product.img">
                <img class="img_detail_product" src="img/product/{{$ctrl.product.img}}.jpg">
              </div>
            </div>

            <div class="row mb-60">
              <div class="input-field col s12">
                <i class="material-icons prefix">description</i>
                <input id="text" type="text" class="validate" ng-model="$ctrl.product.description">
                <label for="email" ng-class="$ctrl.ifEmpty($ctrl.product.description)">Descripción del producto</label>
              </div>
            </div>

            <a class="btn-floating pink accent-2"
               type="reset"
               ng-click="$ctrl.deleteProduct($ctrl.product)"
               ng-if="!$ctrl.createProduct">

                <i class="material-icons">delete</i>
            </a>

            <button type="submit" class="waves-effect waves-light btn right indigo">Enviar
                <i class="material-icons right">send</i>
            </button>
          
          </form>
        </div>
      </section>
    </article>
  `
}