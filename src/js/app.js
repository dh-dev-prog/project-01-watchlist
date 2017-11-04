
import '../css/styles.scss';
import angular from 'angular';
import { test } from './test';


const app = angular.module('app', []);

app.controller('mainController', ['$scope', function($scope){
  $scope.list = [
    {
      name: "vikings",
      img: 'src/img/vikings5.jpg',
      rate: 8.5
    },
    {
      name: "mr robot",
      img: 'src/img/mrrobot3.jpg',
      rate: 8.3
    },
    {
      name: "blade runner 2049",
      img: 'src/img/bladerunner2049.jpg',
      rate: 8.4
    }
  ]
}])
