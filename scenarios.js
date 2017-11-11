describe('app', function(){

  beforeEach(function(){
    browser.get('index.html');
  });

  describe('appRoot', function(){
    it('should display each view properly', function(){
      var links = element.all(by.css('a'));
      var preUrl = 'http://localhost:8080/index.html#!';
      links.first().click().then(function(){
        expect(browser.getCurrentUrl()).toBe(`${preUrl}/watchlist`);
      });
      links.get(1).click().then(function(){
        expect(browser.getCurrentUrl()).toBe(`${preUrl}/home`);
      });
      links.get(2).click().then(function(){
        expect(browser.getCurrentUrl()).toBe(`${preUrl}/watched`);
      });
    });
  });

  describe('movieList', function(){

    it('should filter the movieList', function(){
      var movieList = element.all(by.repeater('movie in $ctrl.list'));
      var query = element(by.model('$ctrl.livesearch'));

      expect(movieList.count()).toBe(3);

      query.sendKeys('vikings');
      expect(movieList.count()).toBe(1);

      query.clear();
      query.sendKeys('r');
      expect(movieList.count()).toBe(2);
    });

    it('should order the list accordingly to the dropdown-menu', function(){
      var queryField = element(by.model('$ctrl.livesearch'));
      var orderSelect = element(by.model('$ctrl.order'));
      var nameOption = orderSelect.element(by.css('option[value="name"]'));
      var movieNameColumn = element.all(by.repeater('movie in $ctrl.list').column('movie.name'));

      function getNames() {
        return movieNameColumn.map(function(elem){
          return elem.getText();
        });
      }
      queryField.sendKeys('r');
      expect(getNames()).toEqual([
        'Mr. Robot - Season 3',
        'Blade Runner 2049'
      ]);
      nameOption.click();
      expect(getNames()).toEqual([
        'Blade Runner 2049',
        'Mr. Robot - Season 3'
      ]);
    });

    it('should display a checkmark when button "add" is clicked', function(){
      element.all(by.repeater('movie in $ctrl.list')).then(function(movies) {
         movies.forEach(function(movie){
          var button = movie.element(by.className('movie-list-add'));
          expect(button.getText()).toEqual('Add');
          button.click().then(function(){
           var newEl = movie.element(by.className('movie-list-checked'));
           expect(newEl.getText()).toEqual('✓');
          })
         })
      });
    });

  });
});
