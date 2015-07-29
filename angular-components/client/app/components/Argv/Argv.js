import {ArgvDirective} from './Argv.directive';
import angular from 'angular';
import uiRouter from 'angular-ui-router';


export const Argv = angular.module('Argv', [uiRouter])
  .config(($stateProvider) => {
    $stateProvider.state('Argv', {
      url: '/Argv',
      template: '<Argv></Argv>'
    })
  })
  .directive('Argv', ArgvDirective);
