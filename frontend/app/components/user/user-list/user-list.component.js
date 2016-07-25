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

         <div class="input-field">
              <i class="material-icons prefix">search</i>
              <input id="icon_prefix" type="text" class="validate" ng-model="$ctrl.search">
              <label for="icon_prefix">First Name</label>
         </div>


        <ul class="collection">

            <user-item ng-repeat="user in $ctrl.users | filter:$ctrl.search"
                        data="user"
                        on-say-hello="$ctrl.sayHello($event);">
            </user-item>

        </ul>

        <a class="btn-floating btn-large waves-effect waves-light red" ng-href="#/index/crear"><i class="material-icons">add</i></a>


  `
}
