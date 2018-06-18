const films = require('../models/films')();
const Film = require('../models/film');
const Review = require('../models/review');
const express = require("express")

const filmsRouter = new express.Router();


filmsRouter.get('/:id', function(req, res){
  const id = req.params.id;
  res.json({data: films[id]})
})

filmsRouter.get('/', function(req, res){
  res.json(films);
})

filmsRouter.post('/', function(req, res){
  films.push(req.body.film)
  res.json({data: films})
})

filmsRouter.delete('/:id', function(req, res){
  const id = req.params.id;
  films.splice(id, 1);
  res.json({data: films})
})

module.exports = filmsRouter;
