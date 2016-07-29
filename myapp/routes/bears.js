var express = require('express');
var mongoose = require('mongoose');

var router = express.Router();
var Bear = require('../models/bear');

router.get("/", function(req, res) {
        Bear.find({}, function (err, bears) {
          if (err) throw err;

          res.json(bears);
        });
        
    }).get("/:id", function(req, res) {
        Bear.findOne({_id : req.params.id}, function (err, bears) {
          if (err) throw err;

          res.json(bears);
        });
        
    }).post("/", function(req, res) {
        new Bear(req.query).save(function(err) {
            if (err) throw err;

            res.json({ message: 'Urso criado com sucesso!' });
        });

    }).delete("/", function(req, res) {
        Bear.remove({ _id: req.query.id }, function(err) {
            if (err) throw err;

            res.json({ message: 'Urso deletado com sucesso!' });
        });

    });

module.exports = router;