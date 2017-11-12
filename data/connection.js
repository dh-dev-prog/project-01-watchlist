const mongoose = require('mongoose');
// Connect to mongodb
mongoose.connect('mongodb://localhost/movies', {useMongoClient: true});

mongoose.connection.once('open', () => {
  console.log('Connection has been made');
}).on('error', error => console.log(`Error: ${error}`))
