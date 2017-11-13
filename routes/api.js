const express = require('express');
const router = express.Router();
const Movie = require('../models/movies');

// get a list of new movies
router.get('/home', function(req,res){
  res.send({type: 'GET'});
});

// put a movie in the watchlist
router.post('/home', function(req,res){
  Movie.create(req.body).then((movie) => {
    res.send(movie);
  });
});

// update a movie
router.put('/home/:id', function(req,res){
  res.send({type: 'PUT'});
});

// delete a movie from the watchlist
router.delete('/home/:id', function(req,res){
  res.send({type: 'DELETE'});
});

module.exports = router;
