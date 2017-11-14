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
        templateUrl: 'views/watchlist.html'
      })
      .when('/watched', {
        templateUrl: 'views/watched.html'
      })
      .otherwise({
        redirectTo: '/home'
      })

  }]);
