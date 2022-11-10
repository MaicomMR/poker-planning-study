const express = require('express');
const router = express.Router();
const createRoomController = require('./controllers/createRoomController')

router.get('/', createRoomController.createRoom);

module.exports = router;