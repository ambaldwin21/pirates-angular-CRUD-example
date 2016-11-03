var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('pirates').then((pirates)=> {
    res.json(pirates)
  })
});

router.post('/', (req, res, next) => {
  let newPirate = {
    name: req.body.name,
    poison: req.body.poison,
    image: req.body.image,
    accessory: req.body.accessory
  }
  knex('pirates').insert(newPirate,'*')
    .then((newPirate) => {
    res.json(newPirate);
  })
});

module.exports = router;