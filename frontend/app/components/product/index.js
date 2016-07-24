/**
 * components/speaker/index.js
 *
 * Module that contains the speakers components and service and configure the routed component for
 * /speakers path route.
 */

import angular from 'angular'

import { ProductItemComponent } from './product-item/product-item.component'
import { ProductListComponent } from './product-list/product-list.component'
import ProductService from './product.service'

const product = angular
    .module('products', [])
    .service('ProductService', ProductService)
    .component('productItem', ProductItemComponent)
    .component('productList', ProductListComponent)
    .config(($stateProvider, $urlRouterProvider) => {
        $stateProvider
            .state('index.products', {
                url: '/products',
                component: 'productList',
                resolve: {
                    products: ProductService => ProductService.getProducts()
                }
            })
    })
    .name

export default product
