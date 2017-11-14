'use strict';

angular.
  module('movieList').
  // Like Directives, the name of the component should match the tag we use in templates (ex: in the config.js file)
  component('movieList', {
    require: {
      root: '^appRoot'
    },
    templateUrl:'movie-list.template.html', // Webpack - loaded with file-loader so path is not relative to index.html
    controller: function MovieListController($http) {
        const self = this;

        self.addToWatchlist = (movie) => {
          movie.wished = true;
          $http.put('api/home/' + movie._id, {wished: true}).then((response) => {
            console.log(response.data);
          })
        }
        $http.get('api/home/?watched=false').then((response) => {
          self.list = response.data;
        });


        this.order = 'date';
    }
});
