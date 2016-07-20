/**
 * app.js
 *
 * Root modulethat imports all modules of the app.
 */

import angular from 'angular'
import uiRouter from 'angular-ui-router'
import ngDialog from 'ng-dialog'

import common from './common/common'
import components from './components/components'
import { AppComponent } from './app.component'

const root = angular
  .module('ThaiApp', [
    uiRouter,
    common,
    components,
    ngDialog
  ])
  .component('thaiApp', AppComponent)

// Bootstrap the app.
document.addEventListener('DOMContentLoaded', () => angular.bootstrap(document, ['ThaiApp']))

export default root
