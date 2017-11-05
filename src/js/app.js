import '../css/styles.scss';
import angular from 'angular';
import ngRoute from 'angular-route';

const app = angular.module('app', ['ngRoute']);

// Routes
app.config(['$routeProvider', function($routeProvider){

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

// Controller
app.controller('mainController', ['$scope', function($scope){

  let formatSeasonNum = num =>  ' - ' + 'season ' + num.toString();

  $scope.addToWatchlist = ($event) => {
    let el = $event.target;
    let parent = el.parentNode;
    let newEl = document.createElement('div');
    newEl.setAttribute('class', 'movie-list-checked')
    newEl.innerHTML = '&#10003;';
    parent.replaceChild(newEl, el);
  }

  $scope.list = [
    {
      name: "vikings",
      season: formatSeasonNum(5),
      img: 'src/img/vikings5.jpg',
      date: new Date(2017, 10, 29),
      rate: 8.5
    },
    {
      name: "mr. robot",
      season: formatSeasonNum(3),
      img: 'src/img/mrrobot3.jpg',
      date: new Date(2017, 9, 1),
      rate: 8.3
    },
    {
      name: "blade runner 2049",
      img: 'src/img/bladerunner2049.jpg',
      date: new Date(2017, 9, 27),
      rate: 8.4
    }
  ]
}])
