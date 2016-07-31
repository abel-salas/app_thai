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

      <div class="row">
          <div class="input-field col s5">
               <i class="material-icons prefix">search</i>
               <input id="icon_prefix" type="text" class="validate" ng-model="$ctrl.search.input">
               <label for="icon_prefix">First Name</label>
          </div>

          <div class="input-field col s7">

               <input type="checkbox" id="test1"
                      ng-model="$ctrl.search.type1"
                      ng-false-value="''"
                      ng-true-value="'skeindor'"/>
               <label for="test1" class="mr-20">Skeindor</label>

               <input type="checkbox" id="test2"
                      ng-model="$ctrl.search.type2"
                      ng-false-value="''"
                      ng-true-value="'phyt'"/>
               <label for="test2" class="mr-20">Phyt's</label>

          </div>
    </div>

    <product-item data="$ctrl.products" on-say-hello="$ctrl.sayHello($event)" search="$ctrl.search"></product-item>


    <a class="btn-floating btn-large waves-effect waves-light pink accent-2" ng-click="$ctrl.createProduct()"><i class="material-icons">add</i></a>
  `
}
