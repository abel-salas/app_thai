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
                    <td>
                         <a ng-href="#/history/{{user._id}}">
                            <i class="small material-icons indigoL1_color">perm_identity</i></td>
                         </a>
                    <td>{{user.name}}</td>
                    <td>{{user.lastName}}</td>
                    <td>{{user.phone}}</td>
                    <td>{{user.email}}</td>
                    <td>{{user.city}}</td>
                    <td>
                        <a ng-href="#/index/user/{{user._id}}" class="button_action_flat pink_color">
                            <i class="material-icons circle">mode_edit</i>
                        </a>
                        <button ng-click="$ctrl.onClick(user)" class="button_action_flat indigo_color">
                            <i class="material-icons">input</i>
                        </button>
                    </td>
                </tr>
            </tbody>

        </table>
    `
}

