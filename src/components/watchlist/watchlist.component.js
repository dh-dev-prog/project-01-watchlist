"use strict";

angular
  .module('watchlist')
  .component('watchlist', {
    templateUrl: 'watchlist.template.html',
    controller: function WatchlistController($http){
      const self = this;

      $http
        .get('/api/watchlist')
        .then((response) => self.list = response.data);

      self.storeInWatched = (movie) => {
        movie.watched = true;
        $http
          .put('api/watchlist/' + movie._id, {watched: true, wished: false})
          .then((reponse) => console.log(`Ok ${reponse}`))
      }
      this.order = 'name';
    },
  });
