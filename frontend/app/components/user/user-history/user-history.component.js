
import controller from './user-history.controller.js'

export const UserHistoryComponent = {
  bindings: {
    user: '<'
  },
  controller,
  template:  `
   <div>
    Esta sera la pagina de historial de Usuario
    <div ng-click="$ctrl.go()">aaaaaaaaaaaaaaaaaa</div>
   </div>
  `
}
