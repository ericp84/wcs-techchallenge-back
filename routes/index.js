var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

///// REQUIRE MODEL /////
const argonautModel = require('../models/argonauts');

///// CREATE ARGONAUTS /////
router.post('/create_argonauts',  async function(req, res) {
  var argoData = new argonautModel({
      name: req.body.name,
  })

  const newArgonaut = await argoData.save()
  console.log(newArgonaut)
  res.json({newArgonaut})
})


///// DISPLAY ALL ARGONAUTS /////
router.get('/argonauts', async function(req, res) {

  const argoOnBoard = await argonautModel.find()

  res.json({argoOnBoard})
})


module.exports = router;
