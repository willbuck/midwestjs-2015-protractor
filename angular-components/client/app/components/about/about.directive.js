import './about.styl';
import {About as controller} from './about.controller';
import template from './about.html';

export const aboutDirective = ()=> {
  return {
    controller,
    template,
    controllerAs: 'vm',
    scope: {},
    replace: true,
    restrict: 'E'
  }
};
