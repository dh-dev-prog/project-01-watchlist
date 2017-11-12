// Make the connection
require('../data/connection');

// Require the Schema
const Movie = require('../models/movies');

describe('Deleting movie', () => {

  let movie;

  beforeEach(function(done){
    movie = new Movie({
      name: 'Blade Runner',
      rate: 8
    });
    movie.save().then(()=>{
      done();
    });
  });

  // Next Test
  it('should update a movie from the database', (done) => {

    Movie
      .findOneAndUpdate({name: 'Blade Runner'}, {name: 'Blade Runner 2049'})
      .then(()=>{
        Movie.findOne({_id: movie._id}).then((result) => {
          expect(result.name).toBe('Blade Runner 2049');
          done();
        });
      });
  });

  // Next Test
  it('should increment the rate of a movie', (done) => {
    Movie.update({},{ $inc: {rate: 1} })
      .then(()=>{
        Movie.findOne({name: 'Blade Runner'}).then((result) => {
          expect(result.rate).toBe(9);
          done();
        })
      })
  });


});
