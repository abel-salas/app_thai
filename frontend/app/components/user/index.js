/**
 * components/speaker/index.js
 *
 * Module that contains the speakers components and service and configure the routed component for
 * /speakers path route.
 */

import angular from 'angular'

import { UserItemComponent } from './user-item/user-item.component'
import { UserListComponent } from './user-list/user-list.component'
import { UserDetailComponent } from './user-detail/user-detail.component'
import { UserHistoryComponent } from './user-history/user-history.component'
import UserService from './user.service'

const user = angular
    .module('users', [])
    .service('UserService', UserService)
    .component('userItem', UserItemComponent)
    .component('userList', UserListComponent)
    .component('userDetail', UserDetailComponent)
    .component('userHistory', UserHistoryComponent)
    .config(($stateProvider, $urlRouterProvider) => {

        $stateProvider
            .state('history', {
                url: '/history/:id',
                component: 'userHistory',
                resolve: {
                    user: (UserService, $stateParams) => UserService.getUser($stateParams.id)
                }
            })
            .state('index.users', {
                url: '/users',
                component: 'userList',
                resolve: {
                    users: UserService => UserService.getUsers()
                }
            })
            .state('index.user', {
                url: '/user/:id',
                component: 'userDetail',
                resolve: {
                    user: (UserService, $stateParams) => UserService.getUser($stateParams.id)
                }
            })
            .state('index.create-user', {
                url: '/crear',
                component: 'userDetail'
            })

            $urlRouterProvider.otherwise('/index/users')

    })
    .name

export default user
