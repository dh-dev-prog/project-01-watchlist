'use strict';
  import 'angular-mocks/angular-mocks';

  describe('movieList', function(){

    beforeEach(angular.mock.module('movieList'));

    describe('controller', function(){
      var $httpBackend, ctrl;

      beforeEach(angular.mock.inject(function($componentController, _$httpBackend_){
        $httpBackend = _$httpBackend_;
        $httpBackend
          .expectGET('data/movies.json')
          .respond([{name: 'vikings'}, {name: 'mr. robot'}, {name: 'blade runner 2049'}]);

        ctrl = $componentController('movieList');
      }));

      it('should create a `list` property with 3 movies fetched with `$http`', function() {
        expect(ctrl.list).toBeUndefined();

        $httpBackend.flush();
        expect(ctrl.list).toEqual([{name: 'vikings'}, {name: 'mr. robot'}, {name: 'blade runner 2049'}]);
      });

    })

  })
