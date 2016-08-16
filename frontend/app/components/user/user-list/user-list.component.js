
import controller from './user-list.controller.js'

export const UserListComponent = {
    bindings: {
        users: '<'
    },
    controller,
    template: `
         <div class="row">
             <div class="input-field col s6">
                  <i class="material-icons prefix">search</i>
                  <input id="icon_prefix" type="text" class="validate" ng-model="$ctrl.search">
                  <label for="icon_prefix">First Name</label>
             </div>
         </div>

        <user-item data="$ctrl.users" on-say-hello="$ctrl.sayHello($event);" input-search="$ctrl.search"></user-item>

        <a class="btn-floating btn-large waves-effect waves-light pink accent-2"
           ng-href="#/index/crear"
           style="margin-top: 15px;">
            <i class="material-icons">add</i>
        </a>


  `
}
