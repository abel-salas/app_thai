import controller from './user-list.controller.js'

export const UserListComponent = {
    bindings: {
        users: '<'
    },
    controller,
    template: `
         <div class="row filters-fixed">
             <div class="input-field col s6">
                  <i class="material-icons prefix">search</i>
                  <input id="icon_prefix" type="text" class="validate" ng-model="$ctrl.search">
                  <label for="icon_prefix">First Name</label>
             </div>
             <div class="col s3">
                <label style="margin-top:30px">{{$ctrl.users.length}} Usuarios</label>
             </div>
         </div>
        <div class="padding-filters-top">
            <user-item data="$ctrl.users" on-say-hello="$ctrl.sayHello($event);" input-search="$ctrl.search"></user-item>
        </div>
        <a class="btn-floating addfixed btn-large waves-effect waves-light pink accent-2"
           ng-href="#/index/crear">
            <i class="material-icons">add</i>
        </a>


  `
}
