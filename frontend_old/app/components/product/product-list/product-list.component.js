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
    <ul class="collection">
      <product-item ng-repeat="product in $ctrl.products"
                    data="product"
                    on-say-hello="$ctrl.sayHello($event);">
      </product-item>
    </ul>
  `
}
