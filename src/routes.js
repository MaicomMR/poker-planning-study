const express = require('express');
const router = express.Router();
const utilsController = require('./controllers/utilsController');
const roomController = require('./controllers/roomController');

router.get('/', utilsController.index);

router.get('/room/:roomId', roomController.checkRoom);

module.exports = router;