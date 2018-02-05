const express = require('express');
const router = new express.Router();

router.use('/api/films', require('./films'));

// router.get('/', function(req, res){
//   res.json("welcome to my express Films App!")
// })

module.exports = router;
