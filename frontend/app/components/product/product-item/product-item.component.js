/**
 * components/speaker/speaker-item/speaker-item.component.js
 *
 * Stateful Component that defines a item in a speakers list.
 * Stateful: - Fetches state, essentially communicating to a backend API through a service
 *           - In this example, the data is fetched in resolve routes and injected in 'data' property binding.
 */

import controller from './product-item.controller.js'

export const ProductItemComponent = {
  bindings: {
    data: '<',
    onSayHello: '&'
  },
  controller,
  template: `
    <li class="collection-item avatar" style="border-bottom: 1px solid #cccccc;">
      <a ng-href="#/index/product/{{$ctrl.data._id}}"><span class="title">{{$ctrl.data.name}}</span></a>
      <p>
        {{$ctrl.data.type}}
        {{$ctrl.data.brand}}
        {{$ctrl.data.description}}
        {{$ctrl.data.created}}
      </p>
      <div class="secondary-content" style="cursor: pointer;" ng-click="$ctrl.onClick();">
        <i class="material-icons">thumb_up</i>
      </div>
    </li>
  `
}

