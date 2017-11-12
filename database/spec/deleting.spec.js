// Make the connection
require('../data/connection');

// Require the Schema
const Movie = require('../models/movies');

describe('Deleting movie', () => {

  let movie;

  beforeEach(function(done){
    movie = new Movie({
      name: 'Blade Runner'
    });
    movie.save().then(()=>{
      done();
    });
  });

  // Next Test
  it('should delete a movie from the database', (done) => {
    Movie.findOneAndRemove({name: 'Blade Runner'}).then(() => {
      Movie.findOne({name: 'Blade Runner'}).then((result) => {
        expect(result).toBe(null);
        done();
      })
    })
  });


});
