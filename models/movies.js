const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema and Model

const MovieSchema = new Schema({
  name: String,
  season: String,
  img: String,
  date: Date,
  rate: Number,
  watched: Boolean,
  wished: Boolean
});

const Movie = mongoose.model('movies', MovieSchema);

module.exports = Movie;
