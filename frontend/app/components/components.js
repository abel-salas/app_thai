import angular from 'angular'

import cart    from './cart'
import user    from './user'
import service from './service'
import admin   from './admin'
import product from './product'

const components = angular
    .module('app.components', [
        user,
        service,
        product,
        cart,
        admin
    ])
    .name

export default components
