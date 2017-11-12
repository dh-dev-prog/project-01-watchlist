// Make the connection
require('../data/connection');

// Require the Schema
const Movie = require('../models/movies');

describe('Finding movie', () => {

  let movie;

  beforeEach(function(done){
    movie = new Movie({
      name: 'Blade Runner',
      rate: 8.0
    });
    movie.save().then(()=>{
      done();
    });
  });

  // Next Test
  it('should find a movie in the database', (done) => {
    Movie.findOne({name: 'Blade Runner'}).then(function(result){
      expect(result.name).toBe('Blade Runner');
      done();
    })
  });

  // Next Test
  it('should find a movie by ID in the database', (done) => {
    Movie.findOne({_id: movie._id}).then(function(result){
      expect(result._id.toString()).toBe(movie._id.toString());
      done();
    })
  });

});
