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

    <div class="input-field">
        <i class="material-icons prefix">search</i>
        <input id="icon_prefix" type="text" class="validate" ng-model="$ctrl.search">
        <label for="icon_prefix">First Name</label>
    </div>


    <ul class="collection">

        <service-item ng-repeat="service in $ctrl.services | filter:$ctrl.search"
                    data="service"
                    on-say-hello="$ctrl.sayHello($event);">
        </service-item>

    </ul>

    <a class="btn-floating btn-large waves-effect waves-light red" ng-click="$ctrl.createService()"><i class="material-icons">add</i></a>
  `
}
