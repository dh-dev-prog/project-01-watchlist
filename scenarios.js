describe('app', function(){
  describe('movieList', function(){
    beforeEach(function(){
      browser.get('index.html');
    });

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

  });
});
