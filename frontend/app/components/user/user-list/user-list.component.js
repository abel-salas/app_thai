/**
 * components/speaker/speaker-list/speaker-list.component.js
 *
 * Stateless Component that defines a speakers list.
 * Stateless: - Data enters the component through attribute bindings (inputs)
 *            - Data leaves the component through events (outputs)
 */

import controller from './user-list.controller.js'

export const UserListComponent = {
  bindings: {
    users: '<'
  },
  controller,
  template: `
    <ul class="collection">

        <user-item ng-repeat="user in $ctrl.users"
                    data="user"
                    on-say-hello="$ctrl.sayHello($event);">
        </user-item>

    </ul>

    <a class="btn-floating btn-large waves-effect waves-light red" ng-click="$ctrl.createUser()"><i class="material-icons">add</i></a>

  </div>

  `
}
