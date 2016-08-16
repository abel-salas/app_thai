
import angular from 'angular'

import { CartListComponent } from './cart-list/cart-list.component'
import { CartOpenComponent } from './cart-open/cart-open.component'
import { CartCoinsComponent } from './cart-coins/cart-coins.component'
import { CartOrderComponent } from './cart-order/cart-order.component'
import CartService from './cart.service'
import OrderService from './order.service'
import CoinsService from './coins.service'


const cart = angular
    .module('carts', [])
    .service('CartService', CartService)
    .service('CoinsService', CoinsService)
    .service('OrderService', OrderService)
    .component('cartList', CartListComponent )
    .component('cartOpen', CartOpenComponent)
    .component('cartCoins', CartCoinsComponent)
    .component('cartOrder', CartOrderComponent )
    .name

export default cart

