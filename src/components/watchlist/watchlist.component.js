"use strict";

angular
  .module('watchlist')
  .component('watchlist', {
    require: {
      root: '^appRoot'
    },
    templateUrl: 'watchlist.template.html',
    controller: function WatchlistController($http){
      const self = this;
      $http
        .get('/api/watchlist')
        .then((response) => {
          self.list = response.data;
          self.order = 'name';
          if(!self.list.length) {
            const content = document.querySelector('.movie-list-wrapper');
            const title = document.createElement('h1');
            const text = document.createTextNode('Your watchlist is empty');
            title.appendChild(text);
            content.appendChild(title);
          }
        });

      self.storeInWatched = (movie) => {
        movie.watched = true;
        $http
          .put('api/watchlist/' + movie._id, {watched: true, wished: false})
          .then((reponse) => console.log(`Ok ${reponse}`))
      }

    },
  });
