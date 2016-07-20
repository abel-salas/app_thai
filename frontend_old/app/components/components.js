/**
 * components/components.js
 *
 * Module that contains the specific components for the application.
 */

import angular from 'angular'

import speaker from './speaker'
import user    from './user'
import service from './service'
import product from './product'

const components = angular
  .module('app.components', [
      speaker,
      user,
      service,
      product
  ])
  .name

export default components
