import angular from 'angular'

import { AdminCartListComponent } from './admin-cart-list/admin-cart-list.component'
import { AdminCartDetailComponent } from './admin-cart-detail/admin-cart-detail.component'

const adminCart = angular
    .module('adminCart', [])
    .component('adminCartList', AdminCartListComponent)
    .component('adminCartDetail', AdminCartDetailComponent)
    .config(($stateProvider, $urlRouterProvider) => {
        $stateProvider
            .state('admin.cartList', {
                url: '/cartList',
                component: 'adminCartList',
                resolve: {
                    carts: CartService => CartService.getAllCarts()
                }
            })
            .state('admin.cartDetail', {
                url: '/cartDetail/:id',
                component: 'adminCartDetail',
                resolve: {
                    cart: CartService => CartService.getCartById(id)
                }
            })

    })
    .name

export default adminCart
