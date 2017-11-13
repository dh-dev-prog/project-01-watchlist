const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Set up express app
const app = express();

// Connect to mongodb
mongoose.connect('mongodb://localhost/movies', {useMongoClient: true});
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

// Initialize routes
app.use('/api', require('./routes/api'));

app.listen(process.env.port || 4000, function(){
  console.log('express listening');
})
