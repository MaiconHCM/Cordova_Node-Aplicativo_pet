var express = require('express');
var router = express.Router();
var Animal = require('../class/Animal');

/* GET home page. */
router.get('/', function (req, res, next) {

  let animal = new Animal();
  animal.name='josé';

  db.collection('data').save(animal, (err, result) => {
    if (err) return console.log(err)

    console.log('Salvo no Banco de Dados')
  })

  console.log(animal);
  res.render('index', { title: 'Expresssss' });

});

module.exports = router;
