/**
 * components/speaker/speaker-list/speaker-list.component.js
 *
 * Stateless Component that defines a speakers list.
 * Stateless: - Data enters the component through attribute bindings (inputs)
 *            - Data leaves the component through events (outputs)
 */

import controller from './product-list.controller.js'

export const ProductListComponent = {
  bindings: {
    products: '<'
  },
  controller,
  template: `

    <div class="input-field">
        <i class="material-icons prefix">search</i>
        <input id="icon_prefix" type="text" class="validate" ng-model="$ctrl.search">
        <label for="icon_prefix">First Name</label>
    </div>

    <ul class="collection">

      <product-item ng-repeat="product in $ctrl.products  | filter:$ctrl.search"
                    data="product"
                    on-say-hello="$ctrl.sayHello($event);">
      </product-item>

    </ul>

    <a class="btn-floating btn-large waves-effect waves-light red" ng-click="$ctrl.createProduct()"><i class="material-icons">add</i></a>
  `
}
