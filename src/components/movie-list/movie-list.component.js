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
        // self.formatSeasonNum = num =>  ' - ' + 'season ' + num.toString();
        self.addToWatchlist = ($event) => {
          let el = $event.target;
          let parent = el.parentNode;
          let id = parent.dataset.id;
          console.log(id);
          let newEl = document.createElement('div');
          newEl.setAttribute('class', 'movie-list-checked');
          newEl.innerHTML = '&#10003;';
          parent.replaceChild(newEl, el);
          $http.put('api/home/' + id, {wished: true}).then((response) => {
            console.log(response.data);
          }).then(()=> {
            $http.get('api/home/?watched=false&wished=false').then((response) => {
              self.list = response.data;
              console.log(self.list);
            });
          });
        }
        $http.get('api/home/?watched=false&wished=false').then((response) => {
          self.list = response.data;
          console.log(self.list);
        });

        this.order = 'date';
    }
});
