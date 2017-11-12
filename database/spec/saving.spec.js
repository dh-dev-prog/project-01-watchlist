// Make the connection
require('../data/connection');

// Require the Schema
const Movie = require('../models/movies');


describe('saving movies', () => {

  it('should saves a movie to the database', (done) => {
    let movie = new Movie({
      name: 'Blade Runner'
    });

    movie.save().then(()=>{
      expect(movie.isNew === false);
      done();
    });

  });

});
