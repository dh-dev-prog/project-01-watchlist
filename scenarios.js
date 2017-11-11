describe('app', () => {

  beforeEach(() => browser.get('index.html'));

  describe('appRoot', () => {

    it('should display each view properly', () => {
      var links = element.all(by.css('a'));
      var preUrl = 'http://localhost:8080/index.html#!';
      links.first().click().then(() => expect(browser.getCurrentUrl()).toBe(`${preUrl}/watchlist`));
      links.get(1).click().then(() => expect(browser.getCurrentUrl()).toBe(`${preUrl}/home`));
      links.get(2).click().then(() => expect(browser.getCurrentUrl()).toBe(`${preUrl}/watched`));
    });

  });

  describe('movieList', () => {

    it('should filter the movieList', () => {
      var movieList = element.all(by.repeater('movie in $ctrl.list'));
      var query = element(by.model('$ctrl.livesearch'));

      expect(movieList.count()).toBe(4);

      query.sendKeys('vikings');
      expect(movieList.count()).toBe(1);

      query.clear();
      query.sendKeys('r');
      expect(movieList.count()).toBe(3);
    });

    it('should order the list accordingly to the dropdown-menu', () => {
      var queryField = element(by.model('$ctrl.livesearch'));
      var orderSelect = element(by.model('$ctrl.order'));
      var nameOption = orderSelect.element(by.css('option[value="name"]'));
      var movieNameColumn = element.all(by.repeater('movie in $ctrl.list').column('movie.name'));

      let getNames = () => movieNameColumn.map(elem => elem.getText());

      queryField.sendKeys('r');
      expect(getNames()).toEqual([
        'Mr. Robot - Season 3',
        'Blade Runner 2049',
        'The Shape Of Water',
      ]);
      nameOption.click();
      expect(getNames()).toEqual([
        'Blade Runner 2049',
        'Mr. Robot - Season 3',
        'The Shape Of Water'
      ]);
    });

    it('should display a checkmark when button "add" is clicked', () => {
      element.all(by.repeater('movie in $ctrl.list')).then(movies => {
         movies.forEach(movie => {
          var button = movie.element(by.className('movie-list-add'));
          expect(button.getText()).toEqual('Add');
          button.click().then(() => {
           var newEl = movie.element(by.className('movie-list-checked'));
           expect(newEl.getText()).toEqual('✓');
          })
         })
      });
    });

  });
});
