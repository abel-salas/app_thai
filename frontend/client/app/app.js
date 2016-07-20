import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component'
import 'normalize.css';

angular.module('app', [
    uiRouter,
    Common,
    Components,
    ngMaterial,
    ngAnimate,
    ngAria
  ])
  .config(($locationProvider, $mdThemingProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');

    $mdThemingProvider.theme('default')
      .primaryPalette('pink')
      .accentPalette('orange');
  })

  .component('app', AppComponent);
