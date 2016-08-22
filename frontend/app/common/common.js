import angular from 'angular'

import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'
import { OrderListComponent } from './order-list/order-list.component'

const common = angular
    .module('app.common', [])
    .component('acHeader', HeaderComponent)
    .component('acFooter', FooterComponent)
    .component('orderList', OrderListComponent)
    .name

export default common
