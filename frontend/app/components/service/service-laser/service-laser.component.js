import controller from './service-laser.controller.js'

export const ServiceLaserComponent = {
    bindings: {
        services: '<'
    },
    controller,
    template: `
    <div class="row filters-fixed">

          <div class="input-field col s3">
               <i class="material-icons prefix">search</i>
               <input id="icon_prefix" type="text" class="validate" ng-model="$ctrl.search.input">
               <label for="icon_prefix">Buscar servicios</label>
          </div>

          <div class="input-field col s7">

               <input type="checkbox" id="test3"
                      ng-model="$ctrl.search.type3"
                      ng-false-value="''"
                      ng-true-value="'facial'"/>
               <label for="test3" class="mr-20">Facial</label>

               <input type="checkbox" id="test4"
                      ng-model="$ctrl.search.type4"
                      ng-false-value="''"
                      ng-true-value="'corporal'"/>
               <label for="test4" class="mr-20">Corporal</label>

          </div>

    </div>
    <service-item data="$ctrl.services" on-say-hello="$ctrl.sayHello($event)" search="$ctrl.search"></service-item>

    <a class="btn-floating addfixed btn-large waves-effect waves-light pink accent-2" ng-click="$ctrl.createService()"><i class="material-icons">add</i></a>
  `
}





