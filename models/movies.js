const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema and Model

const MovieSchema = new Schema({
  name: {
    type: String,
    required: [true, 'name is required']
  },
  season: String,
  img: String,
  date: Date,
  rate: Number,
  watched: {
    type: Boolean,
    default: false
  },
  wished: {
    type: Boolean,
    default: false
  }
});

const Movie = mongoose.model('movies', MovieSchema);

module.exports = Movie;
