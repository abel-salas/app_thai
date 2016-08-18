import angular from 'angular'

import { ProductItemComponent } from './product-item/product-item.component'
import { ProductListComponent } from './product-list/product-list.component'
import { ProductDetailComponent } from './product-detail/product-detail.component'
import ProductService from './product.service'

const product = angular
    .module('products', [])
    .service('ProductService', ProductService)
    .component('productItem', ProductItemComponent)
    .component('productList', ProductListComponent)
    .component('productDetail', ProductDetailComponent)
    .config(($stateProvider, $urlRouterProvider) => {
        $stateProvider
            .state('index.products', {
                url: '/products',
                component: 'productList',
                resolve: {
                    products: ProductService => ProductService.getProducts()
                }
            })
            .state('index.product', {
                url: '/product/:id',
                component: 'productDetail',
                resolve: {
                    product: (ProductService, $stateParams) => ProductService.getProduct($stateParams.id)
                }
            })
            .state('index.createProduct', {
                url: '/create-product',
                component: 'productDetail'
            })
    })
    .name

export default product
