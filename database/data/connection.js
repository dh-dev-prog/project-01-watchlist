const mongoose = require('mongoose');

// ES6 Promises
mongoose.Promise = global.Promise;

// Connect to mongodb
// beforeEach not necessary because we import the all connection.js at top of spec file. So it runs before

mongoose.connect('mongodb://localhost/movies', {useMongoClient: true});
mongoose.connection.once('open', () => {
  console.log('Connection has been made');
}).on('error', error => console.log(`Error: ${error}`));


// Drop the collection before each test
beforeEach(function(done){
  mongoose.connection.collections.movies.drop(function(){
    done();
  });
})
