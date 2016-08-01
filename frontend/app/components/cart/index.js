
import angular from 'angular'

import { CartListComponent } from './cart-list/cart-list.component'
import { CartCloseComponent } from './cart-close/cart-close.component'
import { CartCoinsComponent } from './cart-coins/cart-coins.component'

const cart = angular
    .module('carts', [])
    .component('cartList', CartListComponent )
    .component('cartClose', CartCloseComponent)
    .component('cartCoins', CartCoinsComponent)
    .name

export default cart

