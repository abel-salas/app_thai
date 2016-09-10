import angular from 'angular'

import { ServiceItemComponent } from './service-item/service-item.component'
import { ServiceListComponent } from './service-list/service-list.component'
import { ServiceLaserComponent } from './service-laser/service-laser.component'
import { ServiceDetailComponent } from './service-detail/service-detail.component'
import ServiceService from './service.service'

const service = angular
    .module('services', [])
    .service('ServiceService', ServiceService)
    .component('serviceItem', ServiceItemComponent)
    .component('serviceList', ServiceListComponent)
    .component('serviceLaser', ServiceLaserComponent)
    .component('serviceDetail', ServiceDetailComponent)
    .config(($stateProvider, $urlRouterProvider) => {
        $stateProvider
            .state('index.servicesWoman', {
                url: '/services-woman',
                component: 'serviceList',
                resolve: {
                    services: ServiceService => ServiceService.getServices('woman')
                }
            })
            .state('index.servicesMen', {
                url: '/services-men',
                component: 'serviceList',
                resolve: {
                    services: ServiceService => ServiceService.getServices('men')
                }
            })
            .state('index.servicesLaser', {
                url: '/services-laser',
                component: 'serviceLaser',
                resolve: {
                    services: ServiceService => ServiceService.getServices('laser')
                }
            })
            .state('index.service', {
                url: '/service/:id',
                component: 'serviceDetail',
                resolve: {
                    service: (ServiceService, $stateParams) => ServiceService.getService($stateParams.id)
                }
            })
            .state('index.createService', {
                url: '/create-service',
                component: 'serviceDetail'
            })
    })
    .name

export default service
