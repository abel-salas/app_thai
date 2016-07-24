/**
 * components/speaker/index.js
 *
 * Module that contains the speakers components and service and configure the routed component for
 * /speakers path route.
 */

import angular from 'angular'

import { ServiceItemComponent } from './service-item/service-item.component'
import { ServiceListComponent } from './service-list/service-list.component'
import ServiceService from './service.service'

const service = angular
  .module('services', [])
  .service('ServiceService', ServiceService)
  .component('serviceItem', ServiceItemComponent)
  .component('serviceList', ServiceListComponent)
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('index.services', {
        url: '/services',
        component: 'serviceList',
        resolve: {
            services: ServiceService => ServiceService.getServices()
        }
      })
  })
  .name

export default service
