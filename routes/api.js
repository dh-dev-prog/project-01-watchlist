const express = require('express');
const router = express.Router();
const Movie = require('../models/movies');

// get a list of new movies
router.get('/home', function(req,res, next){
  Movie.find({watched: req.query.watched, wished: req.query.wished}).then((movies) => res.send(movies));
});

// put a movie in the watchlist
router.post('/home', function(req,res, next){
  Movie.create(req.body).then((movie) => {
    res.send(movie);
  }).catch(next);
});

// update a movie
router.put('/home/:id', function(req,res,next){
  Movie.findByIdAndUpdate({_id: req.params.id}, req.body).then((movie) => {
    Movie.findOne({_id: req.params.id}).then((movie) => res.send(movie));
  });
});

// delete a movie from the watchlist
router.delete('/home/:id', function(req,res,next){
  Movie.findByIdAndRemove({_id: req.params.id}).then((movie) => {
    res.send(movie);
  });
});

module.exports = router;
