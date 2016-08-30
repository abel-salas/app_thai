import angular from 'angular'
import uiRouter from 'angular-ui-router'

import common from './common/common'
import components from './components/components'

const AppComponent = {
    template: `<div ui-view></div>`
}

const root = angular
    .module('ThaiApp', [
        uiRouter,
        common,
        components
    ])
    .component('thaiApp', AppComponent)
    .config(($stateProvider) => {

        $stateProvider
            .state('index', {
                url: '/index',
                template: `
                    <ac-header></ac-header>
                    <div class="container">
                        <div class="row mt-10">
                            <div class="col s8" ui-view></div>
                            <div class="col s4">
                                <cart-list></cart-list>
                            </div>
                        </div>
                    </div>
                    <ac-footer></ac-footer>
                `
            })
    })


// Bootstrap the app.
document.addEventListener('DOMContentLoaded', () => angular.bootstrap(document, ['ThaiApp']))

export default root
