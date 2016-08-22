import angular from 'angular'

import adminCart from './admin-cart'

const admin = angular
    .module('admin', [
        adminCart
    ])
    .config(($stateProvider, $urlRouterProvider) => {
        $stateProvider
            .state('admin', {
                url: '/admin',
                template: `
                    <ac-header></ac-header>
                    <div class="row">
                        <div class="col s2 admin-nav" ng-style="vm.fullHeightStyle">
                            <ul class="sidenavAdmin">
                                <li><a href="#/admin"><i class="material-icons left">dashboard</i>Dashboard</a></li>
                                <li><a href="#/admin/cartList"><i class="material-icons left">lock</i>Caja</a></li>
                            </ul>
                        </div>
                        <div class="col s10" ui-view></div>
                    </div>
                `,
                controllerAs: 'vm',
                controller: function ($window) {

                    this.$window = $window;
                    this.fullHeight = ($window.innerHeight - 65) + 'px';
                    this.fullHeightStyle = {
                        "height": this.fullHeight
                    }

                }
            })
    })
    .name

export default admin
