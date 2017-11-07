angular
.module('movieList')
.component('movieList', {
  templateUrl:'movie-list.template.html',
  balbla: function(){},
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

  }
})
//
// // Directive
//
// app.directive('movieList', () => {
//   return {
//     restrict: 'E',
//     scope: {
//       list: '=',
//       title: '=',
//       livesearch: '='
//     },
//     replace: true,
//     transclude: true,
//     templateUrl: 'views/movie-list.template.html',
//     controller: 'mainController'
//   }
// })
