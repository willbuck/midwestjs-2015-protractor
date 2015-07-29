import './Argv.styl';
import {Argv as controller} from './Argv.controller';
import template from './Argv.html';

export const ArgvDirective = ()=> {
  return {
    controller,
    template,
    controllerAs: 'vm',
    scope: {},
    replace: true,
    restrict: 'E'
  }
};
