const films = require('../models/films')();
const Film = require('../models/film');
const Review = require('../models/review');
const express = require("express")

const filmsRouter = new express.Router();

filmsRouter.get('/', function(req, res){
  res.json(films);
})

module.exports = filmsRouter;
