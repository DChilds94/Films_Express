const express = require('express');
const router = new express.Router();

router.use('/film', require('./films.js'))

router.get('/', function(req, res){
  res.json({data: 'Hello, World!'});
});




module.exports = router;
