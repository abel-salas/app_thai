
import angular from 'angular'

import { CartListComponent } from './cart-list/cart-list.component'
import { CartCloseComponent } from './cart-close/cart-close.component'
import { CartCoinsComponent } from './cart-coins/cart-coins.component'
import CartService from './cart.service'
import CoinsService from './coins.service'


const cart = angular
    .module('carts', [])
    .service('CartService', CartService)
    .service('CoinsService', CoinsService)
    .component('cartList', CartListComponent )
    .component('cartClose', CartCloseComponent)
    .component('cartCoins', CartCoinsComponent)
    .name

export default cart

