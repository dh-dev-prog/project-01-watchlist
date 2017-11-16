"use strict";

angular.
  module('watched').
  component('watched', {
    require: {
      root: '^appRoot'
    },
    templateUrl: 'watched.template.html',
    controller: function WatchedController($http) {
      const self = this;
      $http.
        get('api/watched').
        then((response) => {
          self.list = response.data;
          self.order = 'name';
        });
      self.undo = (movie) => {
        console.log(`api/home/${movie._id}`);
        $http.put(`api/home/${movie._id}`, {watched: false}).then((res) => {
          const name = res.data.name;
          self.list.forEach((elem, index) => {
            if (elem.name === name) {
              console.log(elem.name, name, 'ok');
              self.list.splice(index, 1);
            }
          });

        });
      }

    }
  });
