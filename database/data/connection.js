const mongoose = require('mongoose');

// ES6 Promises
mongoose.Promise = global.Promise;

// Connect to mongodb
beforeEach(function(done){
  mongoose.connect('mongodb://localhost/movies', {useMongoClient: true});
  mongoose.connection.once('open', () => {
    console.log('Connection has been made');
    done();
  }).on('error', error => console.log(`Error: ${error}`));

});
