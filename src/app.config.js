// Routes
'use strict';

angular.
  module('app').
  config(['$routeProvider', ($routeProvider) => {

    $routeProvider
      .when('/home', {
        template: '<movie-list></movie-list>'
      })
      .when('/watchlist', {
        template: '<watchlist></watchlist>'
      })
      .when('/watched', {
        template: 'views/watched.html'
      })
      .otherwise({
        redirectTo: '/home'
      })

  }]);
