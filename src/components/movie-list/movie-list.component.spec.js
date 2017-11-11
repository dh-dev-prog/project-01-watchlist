"use strict";

  describe('movieListComponent', () => {

    beforeEach(angular.mock.module('movieList'));

    describe('movieListController', () => {
      let $httpBackend, ctrl;

      beforeEach(angular.mock.inject(($componentController, _$httpBackend_) => {
        // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
        // This allows us to inject a service and assign it to a variable with the same name
        // as the service while avoiding a name conflict.
        $httpBackend = _$httpBackend_;
        $httpBackend
          .expectGET('data/movies.json')
          .respond([{name: 'vikings'}, {name: 'mr. robot'}, {name: 'blade runner 2049'}]);

        ctrl = $componentController('movieList');
      }));

      it('should create a `list` property with 3 movies fetched with `$http`', () => {
        expect(ctrl.list).toBeUndefined();
        // We flush the request queue in the browser by calling $httpBackend.flush().
        // This causes the promise returned by the $http service to be resolved with the trained response
        $httpBackend.flush();
        expect(ctrl.list).toEqual([{name: 'vikings'}, {name: 'mr. robot'}, {name: 'blade runner 2049'}]);
      });

      it('should order the list by date', () => {
        expect(ctrl.order).toBe('date');
      });

    });
  });
