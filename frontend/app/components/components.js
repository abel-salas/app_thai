/**
 * components/components.js
 *
 * Module that contains the specific components for the application.
 */

import angular from 'angular'

import cart    from './cart'
import user    from './user'
import service from './service'
import product from './product'

const components = angular
    .module('app.components', [
        user,
        service,
        product,
        cart
    ])
    .name

export default components
