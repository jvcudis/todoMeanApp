var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Todo = require('../models/Todo.js');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// Get all todos
router.get('/', function(req, res, next) {
  Todo.find(function(err, todos) {
    if(err) next(err);
    res.json(todos);
  });
});

// Get a todo item according to Id
router.get('/:id', function(req, res, next) {
  Todo.findById(req.params.id, function(err, todo) {
    if(err) next(err);
    res.json(todo);
  });
});

// Create todo item
router.post('/', function(req, res, next) {
  Todo.create(req.body, function(err, todo) {
    if(err) next(err);
    res.json(todo);
  });
});

// Update todo item
router.put('/:id', function(req, res, next) {
    Todo.findByIdAndUpdate(req.params.id, req.body, function(err, todo) {
      if(err) next(err);
      res.json(todo);
    });
});

// Delete todo item
router.delete('/:id', function(req, res, next) {
  Todo.findByIdAndRemove(req.params.id, function(err, todo) {
    if(err) next(err);
    res.json(todo);
  });
})

module.exports = router;
