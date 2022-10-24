const express = require("express");
const router = express.Router();

var path = require('path')

router.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/../views/room-index.html'));
});

router.get('/teste', (req, res) => {
    res.send({data: "teste"});
});

router.get('/table', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/../table.html'));
});

router.get('/room/:userId', (req, res) => {
    console.log('Sala ' + req.params.userId + ' criada');
    res.sendFile(path.resolve(__dirname + '/../views/room.html'));
});

module.exports = router;