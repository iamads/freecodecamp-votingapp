'use strict';

var express = require('express');
var controller = require('./poll.controller');
var auth = require('../../auth/auth.service');
var router = express.Router();

router.get('/', controller.index);				// recent polls
router.get('/mypolls/',auth.isAuthenticated(),controller.mypolls);
router.get('/:id', controller.show);				// show  result of polls+auth
router.post('/', auth.isAuthenticated(), controller.create); 				// create & save with any number of options polls + auth + charts
router.put('/:id', auth.isAuthenticated(), controller.update);				
router.patch('/:id', auth.isAuthenticated(), controller.update);						// create new option
router.delete('/:id', auth.isAuthenticated(), controller.destroy);			//delete mu polls + auth

module.exports = router;
