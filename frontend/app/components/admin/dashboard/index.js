import angular from 'angular'

import { DashboardPageComponent } from './dashboard.component'
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component'
import { DashboardUserCardComponent } from './dashboard-user-card/dashboard-user-card.component'
import { StatisticsLastYear } from './statistics-last-year/statistics-last-year.component'

import DashboardService from './dashboard.service'


const dashboard = angular
    .module('dashboard', [])
    .service('DashboardService', DashboardService)
    .component('dashboardPage', DashboardPageComponent)
    .component('dashboardCard', DashboardCardComponent)
    .component('dashboardUserCard', DashboardUserCardComponent)
    .component('statisticsLastYear', StatisticsLastYear)
    .config(($stateProvider) => {
        $stateProvider
            .state('admin.dashboard', {
                url: '/dashboard',
                component: 'dashboardPage',
                resolve: {
                    data: DashboardService => {
                        return DashboardService.getStatistics()
                    }
                }
            })

    })
    .name

export default dashboard
