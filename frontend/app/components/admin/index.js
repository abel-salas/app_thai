import angular from 'angular'

import { CartDetailComponent } from './cart-detail/cart-detail.component'

const product = angular
    .module('cartDetail', [])
    .component('cartDetail', CartDetailComponent)
    .config(($stateProvider, $urlRouterProvider) => {
        $stateProvider
            .state('admin', {
                url: '/admin',
                component: 'cartDetail'
                //resolve: {
                //    cart: ProductService => ProductService.getProducts()
                //}
            })
            .state('index.cart-detail', {
                url: '/cart-detail',
                component: 'cartDetail'
                //resolve: {
                //    cart: ProductService => ProductService.getProducts()
                //}
            })
    })
    .name

export default product
