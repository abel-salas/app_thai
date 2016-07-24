/**
 * components/speaker/speaker-list/speaker-list.component.js
 *
 * Stateless Component that defines a speakers list.
 * Stateless: - Data enters the component through attribute bindings (inputs)
 *            - Data leaves the component through events (outputs)
 */

import controller from './user-history.controller.js'

export const UserHistoryComponent = {
  bindings: {
    user: '<'
  },
  controller,
  template:  `
   <div>
    Esta sera la pagina de historial de Usuario
   </div>
  `
}
