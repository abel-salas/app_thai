/**
 * components/speaker/speaker-item/speaker-item.component.js
 *
 * Stateful Component that defines a item in a speakers list.
 * Stateful: - Fetches state, essentially communicating to a backend API through a service
 *           - In this example, the data is fetched in resolve routes and injected in 'data' property binding.
 */

import controller from './user-item.controller.js'

export const UserItemComponent = {
    bindings: {
        data: '<',
        inputSearch: '<',
        onSayHello: '&'
    },
    controller,
    template: `
        <table class="striped">

            <thead>
              <tr>
                  <th></th>
                  <th data-field="name">Nombre</th>
                  <th data-field="lastName">Apellidos</th>
                  <th data-field="phone">Teléfono</th>
                  <th data-field="email">Email</th>
                  <th data-field="city">Población</th>
                  <th data-field="actions">Acciones</th>
              </tr>
            </thead>

            <tbody>
                <tr ng-repeat="user in $ctrl.data | filter:$ctrl.inputSearch">
                    <td><i class="small material-icons">perm_identity</i></td>
                    <td>{{user.name}}</td>
                    <td>{{user.lastName}}</td>
                    <td>{{user.phone}}</td>
                    <td>{{user.email}}</td>
                    <td>{{user.city}}</td>
                    <td>
                        <a ng-href="#/index/user/{{user._id}}">
                            <i class="material-icons circle">mode_edit</i>
                        </a>
                        <a ng-href="#/history/{{user._id}}" class="secondary-content">
                            <i class="material-icons">input</i>
                        </a>
                    </td>
                </tr>
            </tbody>

        </table>
    `
}

