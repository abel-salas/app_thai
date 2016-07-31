/**
 * app.js
 *
 * Root modulethat imports all modules of the app.
 */

import angular from 'angular'
import uiRouter from 'angular-ui-router'

import common from './common/common'
import components from './components/components'
import { AppComponent } from './app.component'

const root = angular
    .module('ThaiApp', [
        uiRouter,
        common,
        components
    ])
    .component('thaiApp', AppComponent)
    .config(($stateProvider, $urlRouterProvider) => {

        $stateProvider
            .state('index', {
                url: '/index',
                template: `
                    <ac-header></ac-header>
                    <div class="row">
                        <div class="col s8" ui-view></div>
                        <div class="col s4">
                            <cart-list></cart-list>
                        </div>
                    </div>
                    <ac-footer></ac-footer>
                `
            })
    })

// Bootstrap the app.
document.addEventListener('DOMContentLoaded', () => angular.bootstrap(document, ['ThaiApp']))

export default root
