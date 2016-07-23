/**
 * components/components.js
 *
 * Module that contains the specific components for the application.
 */

import angular from 'angular'

import user    from './user'
import service from './service'
import product from './product'

import Home from './home/home'

const components = angular
  .module('app.components', [
    user
  ])
  .name

export default components
