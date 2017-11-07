import '../css/styles.scss';
import angular from 'angular';
import ngRoute from 'angular-route';
import ngAnimate from 'angular-animate';
import './movie-list/movie-list.module';
import './movie-list/movie-list.component';
import './movie-list/movie-list.template.html';
import './movie-list/movie-list.component.spec';


const app = angular.module('app', [
  'ngRoute',
  'ngAnimate',
  'movieList'
]);

// Routes
app.config(['$routeProvider', ($routeProvider) => {

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
