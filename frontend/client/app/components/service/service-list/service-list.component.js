/**
 * components/speaker/speaker-list/speaker-list.component.js
 *
 * Stateless Component that defines a speakers list.
 * Stateless: - Data enters the component through attribute bindings (inputs)
 *            - Data leaves the component through events (outputs)
 */

import controller from './service-list.controller.js'

export const ServiceListComponent = {
  bindings: {
    services: '<'
  },
  controller,
  template: `
    <ul class="collection">
      <service-item ng-repeat="service in $ctrl.services"
                    data="service"
                    on-say-hello="$ctrl.sayHello($event);">
      </service-item>
    </ul>
  `
}
