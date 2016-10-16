import angular from 'angular'

import { AdminBillListComponent } from './admin-bill-list/admin-bill-list.component'

import BillService from './bill.service'

const adminBill = angular
    .module('adminBill', [])
    .service('BillService', BillService)
    .component('adminBillListComponent', AdminBillListComponent)
    .config(($stateProvider, $urlRouterProvider) => {
        $stateProvider
            .state('admin.billList', {
                url: '/billList',
                component: 'adminBillListComponent',
                resolve: {
                    bills: BillService => BillService.getAllBills()
                }
            })
    })
    .name

export default adminBill
