import '../css/styles.scss';
import angular from 'angular';
import ngRoute from 'angular-route';
import ngAnimate from 'angular-animate';

const app = angular.module('app', ['ngRoute', 'ngAnimate']);

// Routes
app.config(['$routeProvider', ($routeProvider) => {

  $routeProvider
    .when('/home', {
      templateUrl: 'views/home.html',
      controller: 'mainController'
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

// Directive

app.directive('movieList', () => {
  return {
    restrict: 'E',
    scope: {
      list: '=',
      title: '=',
      livesearch: '='
    },
    replace: true,
    transclude: true,
    templateUrl: 'views/movie-list.template.html',
    controller: 'mainController'
  }
})
// Controller
app.controller('mainController', ['$scope', '$http', ($scope, $http) => {

  let formatSeasonNum = num =>  ' - ' + 'season ' + num.toString();

  $scope.addToWatchlist = ($event) => {
    let el = $event.target;
    let parent = el.parentNode;
    let newEl = document.createElement('div');
    newEl.setAttribute('class', 'movie-list-checked')
    newEl.innerHTML = '&#10003;';
    parent.replaceChild(newEl, el);
  }

  $http.get('data/movies.json').then((response) => $scope.list = response.data)

}])
