"use strict";

var express = require('express');

var router = express.Router();
/* GET home page. */

router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
}); ///// REQUIRE MODEL /////

var argonautModel = require('../models/argonauts'); ///// CREATE ARGONAUTS /////


router.post('/create_argonauts', function _callee(req, res) {
  var argoData, newArgonaut;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          argoData = new argonautModel({
            name: req.body.name
          });
          _context.next = 3;
          return regeneratorRuntime.awrap(argoData.save());

        case 3:
          newArgonaut = _context.sent;
          res.json({
            newArgonaut: newArgonaut
          });

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
}); ///// DISPLAY ALL ARGONAUTS /////

router.get('/argonauts', function _callee2(req, res) {
  var error, argoOnBoard;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          error = [];
          _context2.next = 3;
          return regeneratorRuntime.awrap(argonautModel.find());

        case 3:
          argoOnBoard = _context2.sent;

          if (argoOnBoard.length === 0) {
            error.push("Pas de membres dans l'équipe 😨 !");
          }

          res.json({
            argoOnBoard: argoOnBoard,
            error: error
          });

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  });
});
module.exports = router;