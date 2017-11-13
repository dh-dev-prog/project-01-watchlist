const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Set up express app
const app = express();

// Connect to mongodb
mongoose.connect('mongodb://localhost/movies', {useMongoClient: true});
mongoose.Promise = global.Promise;

// Static - middleware

app.use(express.static('dist'));

// Body parser - middleware
app.use(bodyParser.json());

// Initialize routes - middleware
app.use('/api', require('./routes/api'));

// Error handling - middleware
app.use((err,req,res,next) => {
  res.status(422).send({error: err._message})
});



app.listen(process.env.port || 4000, function(){
  console.log('express listening');
})
