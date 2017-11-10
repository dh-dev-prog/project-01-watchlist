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
        let formatSeasonNum = num =>  ' - ' + 'season ' + num.toString();
        self.addToWatchlist = ($event) => {
          let el = $event.target;
          let parent = el.parentNode;
          let newEl = document.createElement('div');
          newEl.setAttribute('class', 'movie-list-checked');
          newEl.innerHTML = '&#10003;';
          parent.replaceChild(newEl, el);
        }
        $http.get('data/movies.json').then((response) => self.list = response.data);

        this.order = 'date';
    }
});
