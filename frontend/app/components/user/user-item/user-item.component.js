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
    onSayHello: '&'
  },
  controller,
  template: `
    <li class="collection-item avatar">
      <i class="material-icons circle">contacts</i>
      <a ng-href="#/index/user/{{$ctrl.data._id}}"><span class="title">{{$ctrl.data.name}} {{$ctrl.data.lastName}}</span></a>
      <p>{{$ctrl.data.phone}}<br>
         {{$ctrl.data.city}}
      </p>
      <a ng-href="#/history/{{$ctrl.data._id}}" class="secondary-content"><i class="material-icons">mode_edit</i></a>
    </li>
  `
}

