/**
 * components/speaker/speaker-item/speaker-item.component.js
 *
 * Stateful Component that defines a item in a speakers list.
 * Stateful: - Fetches state, essentially communicating to a backend API through a service
 *           - In this example, the data is fetched in resolve routes and injected in 'data' property binding.
 */

import controller from './service-item.controller.js'

export const ServiceItemComponent = {
  bindings: {
    data: '<',
    search: '<',
    onSayHello: '&'
  },
  controller,
  template: `
    <div class="row">
        <div class="col s4" ng-repeat="service in $ctrl.data
                                      | filter:$ctrl.search.input
                                      | filter:$ctrl.search.type1
                                      | filter:$ctrl.search.type2
                                      | filter:$ctrl.search.type3
                                      | filter:$ctrl.search.type4">
              <div class="card">

                <div class="card-image">
                  <img class="activator" src="img/sample-1.jpg">
                  <span class="card-title">{{service.type}}</span>
                </div>

                <a class="btn-floating btn-large waves-effect waves-light indigo right btn_price">
                  {{service.price}}€
                </a>

                <div class="card-content activator">
                  <i class="material-icons left">more_vert</i></a>
                  <span class="grey-text text-darken-4">{{service.name}}</span>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">{{service.name}}<i class="material-icons right">close</i></span>
                  <p>{{service.description}}</p>
                  <p>{{$ctrl.brand}}</p>
                  <a ng-href="#/index/service/{{service._id}}" class="btn-floating waves-effect waves-light pink accent-2 button_edit">
                    <i class="material-icons right">edit</i></a>
                </div>
              </div>
        </div>
    </div>
  `
}

