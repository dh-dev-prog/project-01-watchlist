'use strict';

angular.
  module('mainComponent').
  component('mainComponent', {
    transclude: true,
    templateUrl: 'main-component.template.html',
    controller: function mainComponentController() {
      const self = this;
      self.live = {
        search: ''
      }
    }
  })
